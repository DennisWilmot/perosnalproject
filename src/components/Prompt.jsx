import React from 'react';
import { COLOR } from '../data/colors.js';
export default function Prompt({ cwd, value, onChange, onKeyDown, onSubmit, inputRef }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
          style={{ display: 'flex', alignItems: 'center', padding: '4px 0 8px', gap: 6, flexWrap: 'wrap' }}>
      <span style={{ color: COLOR.green }}>dennis@field-notes</span>
      <span style={{ color: '#7a8499' }}>:</span>
      <span style={{ color: COLOR.accent }}>{cwd}</span>
      <span style={{ color: '#7a8499' }}>$</span>
      <input className="term-input" type="text" value={value}
             onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown}
             ref={inputRef} autoFocus autoComplete="off" spellCheck={false}
             style={{ flex: 1, minWidth: 200, background: 'transparent', border: 'none', font: 'inherit', color: COLOR.ink, padding: 0, caretColor: COLOR.accent }} />
    </form>
  );
}
