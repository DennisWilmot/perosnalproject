import React from 'react';
export default function PreLabel() {
  return (
    <div style={{ maxWidth: 920, width: '100%', marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', color: '#6a7a9c', fontSize: 11, letterSpacing: '0.15em' }}>
      <div>field-notes.tty · v3.0 · interactive</div>
      <div>type <span style={{ color: '#d97757' }}>help</span> · click anywhere · <span style={{ color: '#d97757' }}>↑↓</span> walks history</div>
    </div>
  );
}
