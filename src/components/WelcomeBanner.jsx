import React from 'react';
import ShipScene from './ShipScene.jsx';

const chip = { color: '#d97757', cursor: 'pointer', padding: '2px 8px', marginLeft: -8, borderRadius: 3 };
const note = { color: '#7a8499' };

export default function WelcomeBanner({ run }) {
  const chips = [
    ['skills/',     'AI engineering, full-stack systems, delivery ownership', 'cd skills'],
    ['experience/', 'Intellibus, AdamsAxiom, civic tech, earlier roles',      'cd experience'],
    ['writing.md',  'Medium essays on crypto and blockchain',                'cat writing.md'],
    ['background/', 'story and education',                                      'cd background'],
    ['about.md',    'short overview of my current work',                      'cat about.md'],
    ['contact.md',  'email, phone, LinkedIn, GitHub, projects',               'cat contact.md'],
  ];
  return (
    <div>
      <ShipScene />

      <div style={{ marginTop: 14, fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: 22, color: '#f5ecd9', lineHeight: 1.3, textAlign: 'center' }}>
        "I'm going to build the ship along the way."
      </div>

      <div style={{ marginTop: 20, maxWidth: 720, lineHeight: 1.7, fontSize: 13.5, color: '#d4cfb8' }}>
        I'm Dennis — an AI engineer and full-stack TypeScript developer building agent systems, retrieval workflows, data products, and real-time applications.
      </div>
      <div style={{ marginTop: 8, maxWidth: 720, lineHeight: 1.7, fontSize: 13.5, color: '#d4cfb8' }}>
        This portfolio is a directory you can walk through. Start with <span style={{ color: '#d97757' }}>skills/ai.md</span> for the AI work, or open <span style={{ color: '#d97757' }}>experience/intellibus.md</span> for the project-by-project overview.
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
