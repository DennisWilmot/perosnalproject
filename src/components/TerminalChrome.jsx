import React from 'react';
export default function TerminalChrome() {
  return (
    <div style={{ background: '#182542', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid #2a3958' }}>
      <div style={{ display: 'flex', gap: 7 }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#d97757' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#e8c773' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#6a9a7a' }} />
      </div>
      <img src="/assets/portrait.jpeg" alt="Dennis Wilmot" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', border: '1px solid #3a4a6a' }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <div style={{ fontSize: 12, color: '#f5ecd9', fontWeight: 600 }}>dennis@field-notes · ~</div>
        <div style={{ fontSize: 10, color: '#7a8499', letterSpacing: '0.1em' }}>ai engineer · kingston ✦ · grand line</div>
      </div>
      <div style={{ fontSize: 10, color: '#7a8499', letterSpacing: '0.15em' }}>utf-8 · jmt</div>
    </div>
  );
}
