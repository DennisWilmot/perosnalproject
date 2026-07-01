import React from 'react';
import { COLOR } from '../data/colors.js';
export default function SudoCard() {
  return (
    <div style={{ background: COLOR.ink, color: '#e6e4dd', padding: '24px 26px', margin: '12px 0', borderRadius: 6, maxWidth: 640, boxShadow: '0 12px 30px -10px rgba(0,0,0,0.3)' }}>
      <div style={{ color: COLOR.gold, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' }}>✦ transmission</div>
      <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: 30, marginTop: 10, lineHeight: 1.1, fontWeight: 500 }}>request received.</div>
      <div style={{ fontSize: 13.5, color: '#c5c5c0', marginTop: 14, lineHeight: 1.6 }}>
        expect a reply at <a href="mailto:dennisdwilmot@gmail.com" style={{ color: COLOR.gold, borderBottom: '1px solid ' + COLOR.gold }}>dennisdwilmot@gmail.com</a> — or beat me to it.
      </div>
      <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <a href="mailto:dennisdwilmot@gmail.com" style={{ color: COLOR.gold, border: '1px solid ' + COLOR.gold, padding: '6px 12px' }}>↗ email</a>
        <a href="tel:876-869-8330" style={{ color: '#aaa9a0', border: '1px solid #3a4256', padding: '6px 12px' }}>↗ phone</a>
        <a href="https://linkedin.com/in/dwilmot" target="_blank" rel="noreferrer" style={{ color: '#aaa9a0', border: '1px solid #3a4256', padding: '6px 12px' }}>↗ linkedin</a>
      </div>
    </div>
  );
}
