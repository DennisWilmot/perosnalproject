import React from 'react';
import { COLOR } from '../data/colors.js';

const btn = {
  background: 'transparent', border: '1px solid #3a4a6a',
  padding: '5px 12px', font: 'inherit', fontSize: 11,
  letterSpacing: '0.1em', cursor: 'pointer', borderRadius: 3,
};

function Crumbs({ cwd, onCrumb }) {
  const parts = cwd.split('/');
  let acc = '';
  return (
    <div style={{ fontSize: 11, color: '#7a8499', letterSpacing: '0.05em' }}>
      {parts.map((p, i) => {
        acc = i === 0 ? p : acc + '/' + p;
        const target = acc;
        const isLast = i === parts.length - 1;
        return (
          <a key={i} href="#" className="crumb"
             onClick={(e) => { e.preventDefault(); onCrumb(target); }}
             style={{ color: isLast ? COLOR.accent : COLOR.muted, padding: '0 2px' }}>
            {(i === 0 ? '~' : p) + (isLast ? '' : ' /')}
          </a>
        );
      })}
    </div>
  );
}

export default function NavBar({ cwd, onBack, onHome, onJump, onCrumb }) {
  const atHome = cwd === '~';
  return (
    <div style={{ background: '#15233d', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #2a3958', flexWrap: 'wrap' }}>
      <button className="navbtn" onClick={onBack} disabled={atHome} style={{ ...btn, color: '#d97757' }}>← BACK</button>
      <button className="navbtn" onClick={onHome} style={{ ...btn, color: '#d97757' }}>⌂ HOME</button>
      <div style={{ flex: 1, minWidth: 12 }} />
      <Crumbs cwd={cwd} onCrumb={onCrumb} />
      <div style={{ flex: 1, minWidth: 12 }} />
      <button className="navbtn" onClick={() => onJump('cd ~/skills')}     style={{ ...btn, color: '#f5ecd9' }}>skills</button>
      <button className="navbtn" onClick={() => onJump('cd ~/experience')} style={{ ...btn, color: '#f5ecd9' }}>experience</button>
      <button className="navbtn" onClick={() => onJump('cd ~/background')} style={{ ...btn, color: '#f5ecd9' }}>background</button>
      <button className="navbtn" onClick={() => onJump('cat ~/contact.md')} style={{ ...btn, color: '#f5ecd9' }}>contact</button>
    </div>
  );
}
