import React from 'react';
import { COLOR } from '../data/colors.js';

function Line({ line, idx }) {
  if (line === '') return <div style={{ height: 8 }} />;
  if (line.startsWith('h1:'))   return <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: 24, color: COLOR.ink, margin: '0 0 12px', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.01em' }}>{line.slice(3)}</div>;
  if (line.startsWith('q:'))    return <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: 20, color: COLOR.ink, margin: '4px 0 6px', lineHeight: 1.35, maxWidth: 620 }}>{line.slice(2)}</div>;
  if (line.startsWith('sub:'))  return <div style={{ fontSize: 11, color: COLOR.faint, padding: '6px 0 0', letterSpacing: '0.04em' }}>{line.slice(4)}</div>;
  if (line.startsWith('★ '))    return (
    <div style={{ fontSize: 13, color: COLOR.text, padding: '4px 0', lineHeight: 1.6, paddingLeft: 20, position: 'relative', maxWidth: 720 }}>
      <span style={{ position: 'absolute', left: 0, top: 4, color: COLOR.accent }}>★</span>
      {line.slice(2)}
    </div>
  );
  if (line.startsWith('— '))    return <div style={{ fontSize: 14, color: COLOR.text, padding: '4px 0', lineHeight: 1.55, paddingLeft: 14, maxWidth: 720, fontFamily: "'EB Garamond', serif", fontStyle: 'italic' }}>{line}</div>;
  if (line.startsWith('img:')) {
    const [src, caption = ''] = line.slice(4).split('|');
    return (
      <div style={{ margin: '12px 0', maxWidth: 480 }}>
        <div style={{ padding: 8, background: '#15233d', border: '1px solid ' + COLOR.ruled, borderRadius: 4 }}>
          <img src={src} alt={caption} style={{ width: '100%', display: 'block', borderRadius: 2 }} />
        </div>
        {caption && <div style={{ fontSize: 10, color: COLOR.faint, marginTop: 6, textAlign: 'right', letterSpacing: '0.08em' }}>— {caption}</div>}
      </div>
    );
  }
  if (line.startsWith('logo:')) {
    const [src, label = ''] = line.slice(5).split('|');
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '6px 0', padding: '8px 12px', background: 'rgba(245,236,217,0.03)', border: '1px solid ' + COLOR.ruled, borderRadius: 4, maxWidth: 420 }}>
        <img src={src} alt={label} style={{ width: 36, height: 36, borderRadius: 4, objectFit: 'cover', flexShrink: 0 }} />
        <span style={{ color: COLOR.ink2, fontSize: 12.5, letterSpacing: '0.02em' }}>{label}</span>
      </div>
    );
  }
  if (line.startsWith('kv:')) {
    const [k, v, href] = line.slice(3).split('|');
    return (
      <div style={{ fontSize: 13, padding: '3px 0', display: 'grid', gridTemplateColumns: '140px 1fr', gap: 14, maxWidth: 600 }}>
        <span style={{ color: COLOR.faint }}>{k}</span>
        {href
          ? <a href={href} target="_blank" rel="noreferrer" style={{ color: COLOR.accent, borderBottom: '1px solid ' + COLOR.accent }}>{v}</a>
          : <span style={{ color: COLOR.ink }}>{v}</span>}
      </div>
    );
  }
  return <div style={{ fontSize: 13.5, color: COLOR.text, padding: '2px 0', lineHeight: 1.65, maxWidth: 720 }}>{line}</div>;
}

export default function FileView({ path, content }) {
  return (
    <div style={{ padding: '14px 18px 18px', margin: '6px 0 14px', borderLeft: '2px solid ' + COLOR.accent, background: 'rgba(217,119,87,0.03)', borderRadius: '0 4px 4px 0' }}>
      <div style={{ fontSize: 10, color: COLOR.faint, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
        ◢ {path.replace('~/', '')}  ·  {content.length} lines
      </div>
      {content.map((line, i) => <Line key={i} line={line} idx={i} />)}
    </div>
  );
}
