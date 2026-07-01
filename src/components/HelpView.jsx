import React from 'react';
import { COLOR } from '../data/colors.js';

const rows = [
  ['ls [path]', 'list a directory'],
  ['cd <dir>', 'change directory  (.. up · ~ home)'],
  ['cat <file>', 'read a file'],
  ['pwd', 'print working directory'],
  ['whoami', 'quick intro (alias for cat about.md)'],
  ['clear', 'clear the screen (also ^L / ⌘L)'],
  ['', ''],
  ['skills', 'cd skills'],
  ['experience', 'cd experience'],
  ['background', 'cd background'],
  ['contact', 'cat contact.md'],
  ['dream', 'cat dream.txt'],
  ['', ''],
  ['↑ / ↓', 'walk command history'],
  ['Tab', 'complete a path'],
  ['^L', 'clear'],
];

export default function HelpView() {
  return (
    <div style={{ padding: '10px 0 14px 16px', margin: '4px 0', borderLeft: '2px solid ' + COLOR.accent, display: 'grid', gridTemplateColumns: '160px 1fr', columnGap: 20, rowGap: 2, fontSize: 13, maxWidth: 600 }}>
      {rows.flatMap((r, i) => [
        <span key={'k' + i} style={{ color: r[0] ? COLOR.accent : 'transparent' }}>{r[0] || '·'}</span>,
        <span key={'v' + i} style={{ color: COLOR.text }}>{r[1]}</span>,
      ])}
    </div>
  );
}
