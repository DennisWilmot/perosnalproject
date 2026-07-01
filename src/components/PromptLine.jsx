import React from 'react';
import { COLOR } from '../data/colors.js';
export default function PromptLine({ cwd, cmd }) {
  return (
    <div style={{ padding: '6px 0 2px', display: 'flex', flexWrap: 'wrap' }}>
      <span style={{ color: COLOR.green }}>dennis@field-notes</span>
      <span style={{ color: '#454a58' }}>:</span>
      <span style={{ color: COLOR.accent }}>{cwd}</span>
      <span style={{ color: '#454a58' }}>{'$\u00a0'}</span>
      <span style={{ color: COLOR.ink }}>{cmd}</span>
    </div>
  );
}
