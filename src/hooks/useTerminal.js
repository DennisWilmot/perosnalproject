import { useCallback, useEffect, useRef, useState } from 'react';
import { TREE } from '../data/tree.js';
import { FILES } from '../data/files.js';

// Each "line" in lines[] is { kind, payload } — components decide how to render.
//   kind: 'prompt'  payload: { cwd, cmd }
//   kind: 'text'    payload: string
//   kind: 'error'   payload: string
//   kind: 'file'    payload: { path, content }   (content = string[])
//   kind: 'listing' payload: { dir, items }
//   kind: 'help'
//   kind: 'sudo'
export function useTerminal() {
  const [cwd, setCwd] = useState('~');
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [cmds, setCmds] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [showWelcome, setShowWelcome] = useState(true);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const suppressScroll = useRef(false);

  useEffect(() => {
    if (suppressScroll.current) { suppressScroll.current = false; return; }
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, showWelcome]);

  const resolve = useCallback((target) => {
    if (!target) return cwd;
    if (target === '~' || target === '/') return '~';
    if (target === '..') {
      if (cwd === '~') return '~';
      const p = cwd.split('/'); p.pop();
      return p.join('/') || '~';
    }
    if (target.startsWith('~/') || target === '~') return target.replace(/\/$/, '');
    const clean = target.replace(/\/$/, '');
    return cwd === '~' ? '~/' + clean : cwd + '/' + clean;
  }, [cwd]);

  const dispatch = useCallback((raw, currentCwd) => {
    const [name, ...args] = raw.split(/\s+/);
    const n = (name || '').toLowerCase();
    const resolveFromCwd = (t) => {
      if (!t) return currentCwd;
      if (t === '~' || t === '/') return '~';
      if (t === '..') {
        if (currentCwd === '~') return '~';
        const p = currentCwd.split('/'); p.pop();
        return p.join('/') || '~';
      }
      if (t.startsWith('~/') || t === '~') return t.replace(/\/$/, '');
      const clean = t.replace(/\/$/, '');
      return currentCwd === '~' ? '~/' + clean : currentCwd + '/' + clean;
    };

    const out = [];
    let nextCwd = currentCwd;

    const doCd = (target) => {
      if (!target || target === '~' || target === '/') {
        nextCwd = '~';
        out.push({ kind: 'listing', payload: { dir: '~', items: TREE['~'] } });
        return;
      }
      const newPath = resolveFromCwd(target);
      if (!TREE[newPath]) {
        if (FILES[newPath]) { doCat(target); return; }
        out.push({ kind: 'error', payload: `cd: no such directory: ${target}` });
        return;
      }
      nextCwd = newPath;
      const items = TREE[newPath] || [];
      const fileCount = items.filter(i => !i.endsWith('/')).length;
      out.push({ kind: 'header', payload: `→ ${newPath}/  ·  ${fileCount} ${fileCount === 1 ? 'file' : 'files'}  ·  click one to read` });
      out.push({ kind: 'listing', payload: { dir: newPath, items } });
    };

    const doCat = (target) => {
      if (!target) { out.push({ kind: 'error', payload: 'cat: missing file' }); return; }
      let full = resolveFromCwd(target);
      if (!FILES[full]) {
        const alt = currentCwd === '~' ? '~/' + target : currentCwd + '/' + target;
        if (FILES[alt]) full = alt;
        else { out.push({ kind: 'error', payload: `cat: no such file: ${target}` }); return; }
      }
      out.push({ kind: 'file', payload: { path: full, content: FILES[full] } });
    };

    switch (n) {
      case 'help': case '?': out.push({ kind: 'help' }); break;
      case 'ls': case 'dir': {
        const dir = args[0] ? resolveFromCwd(args[0]) : currentCwd;
        if (!TREE[dir]) out.push({ kind: 'error', payload: `ls: no such directory: ${args[0] || dir}` });
        else out.push({ kind: 'listing', payload: { dir, items: TREE[dir] } });
        break;
      }
      case 'cd': doCd(args[0]); break;
      case 'cat': case 'open': case 'read': doCat(args[0]); break;
      case 'pwd': out.push({ kind: 'text', payload: currentCwd }); break;
      case 'whoami': case 'about': doCat('~/about.md'); break;
      case 'skills': doCd('skills'); break;
      case 'experience': case 'work': doCd('experience'); break;
      case 'background': doCd('background'); break;
      case 'contact': doCat('~/contact.md'); break;
      case 'dream': doCat('~/dream.txt'); break;
      case 'sudo': {
        const sub = args.join(' ').toLowerCase();
        if (sub === 'hire-me') out.push({ kind: 'sudo' });
        else out.push({ kind: 'error', payload: "sudo: that's not the password. try `sudo hire-me`." });
        break;
      }
      case 'echo': out.push({ kind: 'text', payload: args.join(' ') }); break;
      case 'date': out.push({ kind: 'text', payload: new Date().toString() }); break;
      case 'clear': case 'cls': return { clear: true };
      case 'man': out.push({ kind: 'text', payload: `man: no manual entry for ${args[0] || '...'}; try 'help'.` }); break;
      default: out.push({ kind: 'error', payload: `field-notes: command not found: ${n}. try \`help\`.` });
    }
    return { out, nextCwd };
  }, []);

  const run = useCallback((raw) => {
    const cmd = (raw || '').trim();
    if (!cmd) return;
    setShowWelcome(false);
    const result = dispatch(cmd, cwd);
    if (result.clear) {
      setLines([]);
      setInput('');
      setCmds(c => [...c, cmd]);
      setHistIdx(-1);
      return;
    }
    setLines(prev => [
      ...prev,
      { kind: 'prompt', payload: { cwd, cmd } },
      ...result.out,
    ]);
    setCwd(result.nextCwd);
    setInput('');
    setCmds(c => [...c, cmd]);
    setHistIdx(-1);
  }, [cwd, dispatch]);

  // jump: clear history then run, then scroll to top
  const jump = useCallback((cmd) => {
    suppressScroll.current = true;
    setLines([]);
    setShowWelcome(false);
    setTimeout(() => {
      suppressScroll.current = true;
      const result = dispatch(cmd, cwd);
      if (result.clear) return;
      setLines([
        { kind: 'prompt', payload: { cwd, cmd } },
        ...result.out,
      ]);
      setCwd(result.nextCwd);
      setTimeout(() => { if (bodyRef.current) bodyRef.current.scrollTop = 0; }, 0);
    }, 0);
  }, [cwd, dispatch]);

  const goHome = useCallback(() => {
    setLines([]);
    setShowWelcome(true);
    setCwd('~');
    setTimeout(() => { if (bodyRef.current) bodyRef.current.scrollTop = 0; }, 0);
  }, []);

  const onKeyDown = useCallback((e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmds.length === 0) return;
      const next = histIdx < 0 ? cmds.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next); setInput(cmds[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx < 0) return;
      const next = histIdx + 1;
      if (next >= cmds.length) { setHistIdx(-1); setInput(''); }
      else { setHistIdx(next); setInput(cmds[next]); }
    } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      setLines([]); setShowWelcome(false);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const parts = input.split(/\s+/);
      if (parts.length < 2) return;
      const last = parts[parts.length - 1];
      const items = TREE[cwd] || [];
      const match = items.find(it => it.replace(/\/$/, '').startsWith(last));
      if (match) { parts[parts.length - 1] = match; setInput(parts.join(' ')); }
    }
  }, [cmds, histIdx, input, cwd]);

  return {
    cwd, lines, input, showWelcome,
    bodyRef, inputRef,
    setInput, run, jump, goHome, onKeyDown,
    focusInput: () => inputRef.current && inputRef.current.focus(),
  };
}
