import React from 'react';
import { COLOR } from '../data/colors.js';

export default function Listing({ dir, items, onRun }) {
  const list = dir === '~' ? items.slice() : ['../', ...items];
  return (
    <div style={{ padding: '8px 0 10px', display: 'flex', flexWrap: 'wrap', gap: '6px 18px' }}>
      {list.map((item, i) => {
        const isUp = item === '../';
        const isDir = item.endsWith('/');
        const name = isDir ? item.slice(0, -1) : item;
        const cmd = isUp ? 'cd ..' : (isDir ? `cd ${name}` : `cat ${name}`);
        return (
          <a key={i} className="ls-cell" href="#"
             onClick={(e) => { e.preventDefault(); onRun(cmd); }}
             style={{
               color: isDir ? COLOR.accent : COLOR.ink,
               padding: '4px 10px', margin: '0 -4px', borderRadius: 3,
               textDecoration: 'underline dotted', textUnderlineOffset: '3px',
               textDecorationColor: isDir ? COLOR.accent : COLOR.muted,
               fontWeight: isDir ? 500 : 400,
             }}>{item}</a>
        );
      })}
    </div>
  );
}
