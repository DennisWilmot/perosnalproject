import React from 'react';
import ShipScene from './ShipScene.jsx';

const chip = { color: '#d97757', cursor: 'pointer', padding: '2px 8px', marginLeft: -8, borderRadius: 3 };
const note = { color: '#7a8499' };

export default function WelcomeBanner({ run }) {
  const chips = [
    ['skills/',     'what i actually do — AI engineering, systems, leadership', 'cd skills'],
    ['experience/', "what i've shipped — pitched by the kind of problem",        'cd experience'],
    ['background/', 'the why — story, schooling, influences',                    'cd background'],
    ['about.md',    '30-second version',                                         'cat about.md'],
    ['contact.md',  'how to reach me',                                           'cat contact.md'],
  ];
  return (
    <div>
      <ShipScene />

      <div style={{ marginTop: 14, fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: 22, color: '#f5ecd9', lineHeight: 1.3, textAlign: 'center' }}>
        "I'm going to build the ship along the way."
      </div>

      <div style={{ marginTop: 20, maxWidth: 720, lineHeight: 1.7, fontSize: 13.5, color: '#d4cfb8' }}>
        I'm Dennis — AI engineer. I build agent systems that ship into real environments: agent fleets, RAG over messy data, products that have to work during real events.
      </div>
      <div style={{ marginTop: 8, maxWidth: 720, lineHeight: 1.7, fontSize: 13.5, color: '#d4cfb8' }}>
        This page is a directory you can walk through. <span style={{ color: '#d97757' }}>Use the buttons above</span>, or type, or click anything underlined.
      </div>

      <div style={{ marginTop: 22, maxWidth: 720 }}>
        <div style={{ color: '#7a8499', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>— start here —</div>
        <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: '6px 16px', lineHeight: 1.85 }}>
          {chips.map(([label, desc, cmd]) => (
            <React.Fragment key={cmd}>
              <a className="chip" href="#" onClick={(e) => { e.preventDefault(); run(cmd); }} style={chip}>→ {label}</a>
              <span style={note}>{desc}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24, padding: '10px 14px', borderLeft: '2px solid #d97757', background: 'rgba(217,119,87,0.06)', fontSize: 12, color: '#9aa6c0', lineHeight: 1.6 }}>
        <span style={{ color: '#e8c773' }}>non-tech crew:</span> just click the buttons above. <span style={{ color: '#e8c773' }}>tech crew:</span> ↑↓ walks history, Tab completes, <span style={{ color: '#d97757' }}>sudo hire-me</span> when you've seen enough.
      </div>

      <div style={{ height: 14 }} />
    </div>
  );
}
