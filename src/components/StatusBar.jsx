import React from 'react';
export default function StatusBar({ cwd }) {
  return (
    <div style={{ background: '#15233d', color: '#d4cfb8', padding: '8px 18px', display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.1em', flexWrap: 'wrap', gap: 8 }}>
      <div><span style={{ color: '#e8c773' }}>●</span> READY &nbsp;·&nbsp; <span style={{ color: '#d97757' }}>{cwd}</span></div>
      <div>↑↓ history &nbsp;·&nbsp; ⏎ run &nbsp;·&nbsp; ← back &nbsp;·&nbsp; ⌂ home &nbsp;·&nbsp; ^L clear</div>
      <div>UTC−05:00 · KINGSTON ✦ · © 2026 dennis wilmot</div>
    </div>
  );
}
