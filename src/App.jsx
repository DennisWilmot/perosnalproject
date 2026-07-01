import React from 'react';
import { useTerminal } from './hooks/useTerminal.js';
import { COLOR } from './data/colors.js';
import PreLabel from './components/PreLabel.jsx';
import TerminalChrome from './components/TerminalChrome.jsx';
import NavBar from './components/NavBar.jsx';
import WelcomeBanner from './components/WelcomeBanner.jsx';
import PromptLine from './components/PromptLine.jsx';
import Listing from './components/Listing.jsx';
import FileView from './components/FileView.jsx';
import HelpView from './components/HelpView.jsx';
import SudoCard from './components/SudoCard.jsx';
import Prompt from './components/Prompt.jsx';
import StatusBar from './components/StatusBar.jsx';
import PostFooter from './components/PostFooter.jsx';

export default function App() {
  const t = useTerminal();

  const renderLine = (line, i) => {
    switch (line.kind) {
      case 'prompt':  return <PromptLine key={i} cwd={line.payload.cwd} cmd={line.payload.cmd} />;
      case 'text':    return <div key={i} style={{ padding: '2px 0', color: COLOR.text, whiteSpace: 'pre-wrap' }}>{line.payload}</div>;
      case 'error':   return <div key={i} style={{ padding: '2px 0', color: COLOR.accent, whiteSpace: 'pre-wrap' }}>{line.payload}</div>;
      case 'header':  return <div key={i} style={{ color: COLOR.muted, fontSize: 11, padding: '6px 0 12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{line.payload}</div>;
      case 'listing': return <Listing key={i} dir={line.payload.dir} items={line.payload.items} onRun={t.run} />;
      case 'file':    return <FileView key={i} path={line.payload.path} content={line.payload.content} />;
      case 'help':    return <HelpView key={i} />;
      case 'sudo':    return <SudoCard key={i} />;
      default: return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(ellipse at top, #25365a 0%, #1a2942 70%)', padding: '32px 24px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PreLabel />

      <div style={{ maxWidth: 920, width: '100%', background: COLOR.bg, borderRadius: 8, overflow: 'hidden', boxShadow: '0 30px 80px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(217,119,87,0.08)' }}>
        <TerminalChrome />
        <NavBar
          cwd={t.cwd}
          onBack={() => t.cwd !== '~' && t.jump('cd ..')}
          onHome={t.goHome}
          onJump={(cmd) => t.jump(cmd)}
          onCrumb={(target) => t.run('cd ' + target)}
        />

        <div className="term-body" ref={t.bodyRef} onClick={t.focusInput}
             style={{ height: 720, overflowY: 'auto', padding: '26px 32px 12px', fontSize: 13, lineHeight: 1.55, color: COLOR.text, background: COLOR.bg, cursor: 'text' }}>
          {t.showWelcome && <WelcomeBanner run={t.run} />}
          {t.lines.map(renderLine)}
          <Prompt cwd={t.cwd} value={t.input} onChange={t.setInput} onKeyDown={t.onKeyDown}
                  onSubmit={() => t.run(t.input)} inputRef={t.inputRef} />
        </div>

        <StatusBar cwd={t.cwd} />
      </div>

      <PostFooter />
    </div>
  );
}
