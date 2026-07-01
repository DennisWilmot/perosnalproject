import React from 'react';

// Each row is a JSX line in a <div> with white-space:pre so spaces are preserved.
// Pulled straight from the ASCII art in the design preview.
const C = { gold: '#e8c773', muted: '#7a8499', ink: '#f5ecd9', accent: '#d97757', sea1: '#4a5570', sea2: '#3a4a6a', cloud: '#9aa6c0', faintBlue: '#6a7a9c' };

const Row = ({ children }) => <div>{children}</div>;
const Sp = ({ c, children }) => <span style={{ color: c }}>{children}</span>;

export default function ShipScene() {
  return (
    <div style={{ whiteSpace: 'pre', fontSize: 11, lineHeight: 1.05, fontFamily: "'JetBrains Mono', monospace", color: C.accent, width: '100%', overflow: 'hidden' }}>
      <Row><Sp c={C.gold}>{'                                                                                  *   ✦'}</Sp></Row>
      <Row><Sp c={C.gold}>{'        ✦                                                                              '}</Sp></Row>
      <Row><Sp c={C.muted}>{'       __                                          '}</Sp><Sp c={C.gold}>.--.</Sp><Sp c={C.muted}>{'                              '}</Sp></Row>
      <Row><Sp c={C.muted}>{'     _( _)_                                        '}</Sp><Sp c={C.gold}>/    \</Sp><Sp c={C.muted}>{'      '}</Sp><Sp c={C.cloud}>__/\__</Sp><Sp c={C.muted}>{'                  '}</Sp></Row>
      <Row><Sp c={C.muted}>{'    (_ (__)_)                                      '}</Sp><Sp c={C.gold}>\_</Sp><Sp c={C.accent}>/\</Sp><Sp c={C.gold}>_/</Sp><Sp c={C.muted}>{'      '}</Sp><Sp c={C.cloud}>\    /</Sp><Sp c={C.muted}>{'                  '}</Sp></Row>
      <Row><Sp c={C.muted}>{'      (__)                                                       '}</Sp><Sp c={C.cloud}>/_  _\</Sp><Sp c={C.muted}>{'                  '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'                  '}</Sp><Sp c={C.ink}>v</Sp><Sp c={C.faintBlue}>{'                                              '}</Sp><Sp c={C.cloud}>{' \/'}</Sp><Sp c={C.muted}>{'                    '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'              '}</Sp><Sp c={C.ink}>_~_</Sp><Sp c={C.faintBlue}>{'          '}</Sp><Sp c={C.ink}>v</Sp><Sp c={C.faintBlue}>{'                       '}</Sp><Sp c={C.accent}>|</Sp><Sp c={C.faintBlue}>{'                                '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'                     '}</Sp><Sp c={C.ink}>_~_</Sp><Sp c={C.faintBlue}>{'      '}</Sp><Sp c={C.ink}>v</Sp><Sp c={C.faintBlue}>{'           '}</Sp><Sp c={C.accent}>|</Sp><Sp c={C.faintBlue}>{'       '}</Sp><Sp c={C.accent}>|~~~~|</Sp><Sp c={C.faintBlue}>{'                          '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'                            '}</Sp><Sp c={C.ink}>v</Sp><Sp c={C.faintBlue}>{'            '}</Sp><Sp c={C.accent}>|~~|</Sp><Sp c={C.faintBlue}>{'    '}</Sp><Sp c={C.accent}>| </Sp><Sp c={C.ink}>☠</Sp><Sp c={C.accent}>  |</Sp><Sp c={C.faintBlue}>{'                          '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'                                          '}</Sp><Sp c={C.accent}>|  |</Sp><Sp c={C.faintBlue}>{'    '}</Sp><Sp c={C.accent}>|/=\ |</Sp><Sp c={C.faintBlue}>{'                          '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'                '}</Sp><Sp c={C.accent}>|~|</Sp><Sp c={C.faintBlue}>{'                       '}</Sp><Sp c={C.accent}>|  |</Sp><Sp c={C.faintBlue}>{'    '}</Sp><Sp c={C.accent}>|/=\ |</Sp><Sp c={C.faintBlue}>{'                          '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'      '}</Sp><Sp c={C.accent}>|~|</Sp><Sp c={C.faintBlue}>{'       '}</Sp><Sp c={C.accent}>|=|</Sp><Sp c={C.faintBlue}>{'                       '}</Sp><Sp c={C.accent}>|=/|</Sp><Sp c={C.faintBlue}>{'    '}</Sp><Sp c={C.accent}>|/=\ |</Sp><Sp c={C.faintBlue}>{'                          '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'      '}</Sp><Sp c={C.accent}>|=|</Sp><Sp c={C.faintBlue}>{'      '}</Sp><Sp c={C.accent}>/|=|\</Sp><Sp c={C.faintBlue}>{'                  ___    '}</Sp><Sp c={C.accent}>/|=|\</Sp><Sp c={C.faintBlue}>{'   '}</Sp><Sp c={C.accent}>/|/=\|\</Sp><Sp c={C.faintBlue}>{'    ___                       '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'    '}</Sp><Sp c={C.accent}>__|=|__</Sp><Sp c={C.faintBlue}>{'  '}</Sp><Sp c={C.accent}>__|=|__</Sp><Sp c={C.faintBlue}>{'              '}</Sp><Sp c={C.accent}>__|___|__</Sp><Sp c={C.faintBlue}>{'  '}</Sp><Sp c={C.accent}>/_|=|_\</Sp><Sp c={C.faintBlue}>{' '}</Sp><Sp c={C.accent}>/_|/=\|_\</Sp><Sp c={C.faintBlue}>{'  '}</Sp><Sp c={C.accent}>__|___|__</Sp><Sp c={C.faintBlue}>{'              '}</Sp></Row>
      <Row><Sp c={C.faintBlue}>{'    '}</Sp><Sp c={C.accent}>\_____/</Sp><Sp c={C.faintBlue}>{'  '}</Sp><Sp c={C.accent}>\_____/</Sp><Sp c={C.faintBlue}>{'              '}</Sp><Sp c={C.accent}>\__</Sp><Sp c={C.gold}>D.W.</Sp><Sp c={C.accent}>__/</Sp><Sp c={C.faintBlue}>{'  '}</Sp><Sp c={C.accent}>\_____/</Sp><Sp c={C.faintBlue}>{' '}</Sp><Sp c={C.accent}>\_______/</Sp><Sp c={C.faintBlue}>{'  '}</Sp><Sp c={C.accent}>\__</Sp><Sp c={C.gold}>grand</Sp><Sp c={C.accent}>__/</Sp><Sp c={C.faintBlue}>{'              '}</Sp></Row>
      <Row><Sp c={C.sea1}>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</Sp></Row>
      <Row><Sp c={C.sea1}>{'  ~     ~      ~      ~       ~      ~      ~      ~       ~       ~      ~      ~      ~'}</Sp></Row>
      <Row><Sp c={C.sea1}>{'~     ~     ~      ~      ~       ~       ~       ~      ~      ~       ~      ~      ~  '}</Sp></Row>
      <Row><Sp c={C.sea2}>{'    ~~~~~      ~~~~~       ~~~~~~~       ~~~~~~      ~~~~~~~       ~~~~~       ~~~~~~   '}</Sp></Row>
    </div>
  );
}
