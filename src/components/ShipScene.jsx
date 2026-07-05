import React, { useEffect, useRef, useState } from 'react';

const C = {
  gold: '#e8c773',
  muted: '#7a8499',
  ink: '#f5ecd9',
  accent: '#d97757',
  sea1: '#4a5570',
  sea2: '#3a4a6a',
  cloud: '#9aa6c0',
  faintBlue: '#6a7a9c',
};

const Row = ({ children }) => <div>{children}</div>;
const Sp = ({ c, children }) => <span style={{ color: c }}>{children}</span>;

function segsLen(segs) {
  return segs.reduce((n, s) => n + s.t.length, 0);
}

function renderSegs(segs, keyPrefix = '') {
  return segs.map((s, i) => (
    <Sp key={`${keyPrefix}${i}`} c={C[s.c]}>{s.t}</Sp>
  ));
}

function tileSegs(segs, times) {
  if (times <= 0) return [];
  return Array.from({ length: times }, (_, i) => renderSegs(segs, `t${i}-`)).flat();
}

function SceneRow({ hero, tile, cols, tileStart }) {
  const heroLen = segsLen(hero);
  const tileLen = tile ? segsLen(tile) : 0;
  const start = tile ? Math.max(tileStart ?? heroLen, heroLen) : heroLen;
  const pad = start - heroLen;
  const repeats = tile && tileLen > 0 ? Math.max(0, Math.ceil((cols - start) / tileLen)) : 0;

  return (
    <Row>
      {renderSegs(hero)}
      {pad > 0 && <Sp c={C.faintBlue}>{' '.repeat(pad)}</Sp>}
      {tileSegs(tile, repeats)}
    </Row>
  );
}

const SKIES = [
  [{ c: 'faintBlue', t: '         ' }, { c: 'gold', t: '*  ✦' }, { c: 'faintBlue', t: '       ' }],
  [{ c: 'faintBlue', t: '      ' }, { c: 'gold', t: '✦' }, { c: 'faintBlue', t: '          ' }, { c: 'gold', t: '*' }, { c: 'faintBlue', t: '      ' }],
  [{ c: 'faintBlue', t: '    ' }, { c: 'cloud', t: '__' }, { c: 'faintBlue', t: '              ' }],
  [{ c: 'faintBlue', t: '  ' }, { c: 'cloud', t: '__/\\__' }, { c: 'faintBlue', t: '          ' }],
  [{ c: 'faintBlue', t: '  ' }, { c: 'cloud', t: '\\    /' }, { c: 'faintBlue', t: '          ' }],
  [{ c: 'faintBlue', t: '   ' }, { c: 'cloud', t: '/_  _\\' }, { c: 'faintBlue', t: '         ' }],
  [{ c: 'faintBlue', t: '       ' }, { c: 'cloud', t: '\\/' }, { c: 'faintBlue', t: '     ' }, { c: 'ink', t: 'v' }, { c: 'faintBlue', t: '     ' }],
  [{ c: 'faintBlue', t: '    ' }, { c: 'ink', t: '_~_' }, { c: 'faintBlue', t: '       ' }, { c: 'ink', t: 'v' }, { c: 'faintBlue', t: '    ' }],
];

// Original hero scene — left side stays exactly as designed.
const HERO = [
  [{ c: 'gold', t: '                                                                                  *   ✦' }],
  [{ c: 'gold', t: '        ✦                                                                              ' }],
  [
    { c: 'muted', t: '       __                                          ' },
    { c: 'gold', t: '.--.' },
    { c: 'muted', t: '                              ' },
  ],
  [
    { c: 'muted', t: '     _( _)_                                        ' },
    { c: 'gold', t: '/    \\' },
    { c: 'muted', t: '      ' },
    { c: 'cloud', t: '__/\\__' },
    { c: 'muted', t: '                  ' },
  ],
  [
    { c: 'muted', t: '    (_ (__)_)                                      ' },
    { c: 'gold', t: '\\_' },
    { c: 'accent', t: '/\\' },
    { c: 'gold', t: '_/' },
    { c: 'muted', t: '      ' },
    { c: 'cloud', t: '\\    /' },
    { c: 'muted', t: '                  ' },
  ],
  [
    { c: 'muted', t: '      (__)                                                       ' },
    { c: 'cloud', t: '/_  _\\' },
    { c: 'muted', t: '                  ' },
  ],
  [
    { c: 'faintBlue', t: '                  ' },
    { c: 'ink', t: 'v' },
    { c: 'faintBlue', t: '                                              ' },
    { c: 'cloud', t: ' \\/' },
    { c: 'muted', t: '                    ' },
  ],
  [
    { c: 'faintBlue', t: '              ' },
    { c: 'ink', t: '_~_' },
    { c: 'faintBlue', t: '          ' },
    { c: 'ink', t: 'v' },
    { c: 'faintBlue', t: '                       ' },
    { c: 'accent', t: '|' },
    { c: 'faintBlue', t: '                                ' },
  ],
  [
    { c: 'faintBlue', t: '                     ' },
    { c: 'ink', t: '_~_' },
    { c: 'faintBlue', t: '      ' },
    { c: 'ink', t: 'v' },
    { c: 'faintBlue', t: '           ' },
    { c: 'accent', t: '|' },
    { c: 'faintBlue', t: '       ' },
    { c: 'accent', t: '|~~~~|' },
    { c: 'faintBlue', t: '                          ' },
  ],
  [
    { c: 'faintBlue', t: '                            ' },
    { c: 'ink', t: 'v' },
    { c: 'faintBlue', t: '            ' },
    { c: 'accent', t: '|~~|' },
    { c: 'faintBlue', t: '    ' },
    { c: 'accent', t: '| ' },
    { c: 'ink', t: '☠' },
    { c: 'accent', t: '  |' },
    { c: 'faintBlue', t: '                          ' },
  ],
  [
    { c: 'faintBlue', t: '                                          ' },
    { c: 'accent', t: '|  |' },
    { c: 'faintBlue', t: '    ' },
    { c: 'accent', t: '|/=\\ |' },
    { c: 'faintBlue', t: '                          ' },
  ],
  [
    { c: 'faintBlue', t: '                ' },
    { c: 'accent', t: '|~|' },
    { c: 'faintBlue', t: '                       ' },
    { c: 'accent', t: '|  |' },
    { c: 'faintBlue', t: '    ' },
    { c: 'accent', t: '|/=\\ |' },
    { c: 'faintBlue', t: '                          ' },
  ],
  [
    { c: 'faintBlue', t: '      ' },
    { c: 'accent', t: '|~|' },
    { c: 'faintBlue', t: '       ' },
    { c: 'accent', t: '|=|' },
    { c: 'faintBlue', t: '                       ' },
    { c: 'accent', t: '|=/|' },
    { c: 'faintBlue', t: '    ' },
    { c: 'accent', t: '|/=\\ |' },
    { c: 'faintBlue', t: '                          ' },
  ],
  [
    { c: 'faintBlue', t: '      ' },
    { c: 'accent', t: '|=|' },
    { c: 'faintBlue', t: '      ' },
    { c: 'accent', t: '/|=|\\' },
    { c: 'faintBlue', t: '                  ___    ' },
    { c: 'accent', t: '/|=|\\' },
    { c: 'faintBlue', t: '   ' },
    { c: 'accent', t: '/|/=\\|\\' },
    { c: 'faintBlue', t: '    ___                       ' },
  ],
  [
    { c: 'faintBlue', t: '    ' },
    { c: 'accent', t: '__|=|__' },
    { c: 'faintBlue', t: '  ' },
    { c: 'accent', t: '__|=|__' },
    { c: 'faintBlue', t: '              ' },
    { c: 'accent', t: '__|___|__' },
    { c: 'faintBlue', t: '  ' },
    { c: 'accent', t: '/_|=|_\\' },
    { c: 'faintBlue', t: ' ' },
    { c: 'accent', t: '/_|/=\\|_\\' },
    { c: 'faintBlue', t: '  ' },
    { c: 'accent', t: '__|___|__' },
    { c: 'faintBlue', t: '              ' },
  ],
  [
    { c: 'faintBlue', t: '    ' },
    { c: 'accent', t: '\\_____/' },
    { c: 'faintBlue', t: '  ' },
    { c: 'accent', t: '\\_____/' },
    { c: 'faintBlue', t: '              ' },
    { c: 'accent', t: '\\__' },
    { c: 'gold', t: 'D.W.' },
    { c: 'accent', t: '__/' },
    { c: 'faintBlue', t: '  ' },
    { c: 'accent', t: '\\_____/' },
    { c: 'faintBlue', t: ' ' },
    { c: 'accent', t: '\\_______/' },
    { c: 'faintBlue', t: '  ' },
    { c: 'accent', t: '\\__' },
    { c: 'gold', t: 'grand' },
    { c: 'accent', t: '__/' },
    { c: 'faintBlue', t: '              ' },
  ],
];

const FLEET_START = Math.max(...HERO.map(segsLen));
const SKY_START = 94;
const SHIP_WIDTH = 56;
const shipLine = (text, c = 'accent') => [{ c, t: text.padEnd(SHIP_WIDTH, ' ') }];

// Background vessels stay smaller and varied so the D.W. flagship remains distinct.
const SHIP_TILES = [
  null, null, null, null, null, null, null, null,
  shipLine('        |                    |                  '),
  shipLine('   |    |       |            |       |          '),
  shipLine('  /|\\  |~~|    /|\\       |~~|      /|\\         '),
  shipLine(' /_|_\\ |  |   /_|_\\      |  |     /_|_\\   |    '),
  shipLine('  |=| /|=|\\    |=|      /|=|\\     |=|   /|\\   '),
  shipLine('__|_|_\\___/____|_|__  __\\___/_____|_|__/___\\__', 'faintBlue'),
  shipLine(' \\ scout /      \\_/      \\ guide /     \\___/   ', 'faintBlue'),
];

const SEA = [
  [{ c: 'sea1', t: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' }],
  [{ c: 'sea1', t: '  ~     ~      ~      ~       ~      ~      ~      ~       ~       ~      ~      ~      ~' }],
  [{ c: 'sea1', t: '~     ~     ~      ~      ~       ~       ~       ~      ~      ~       ~      ~      ~  ' }],
  [{ c: 'sea2', t: '    ~~~~~      ~~~~~       ~~~~~~~       ~~~~~~      ~~~~~~~       ~~~~~       ~~~~~~   ' }],
];

const SEA_TILES = [
  [{ c: 'sea1', t: '~' }],
  [{ c: 'sea1', t: ' ~     ~      ~      ~       ~      ~      ~      ~       ~       ~      ~      ~      ~' }],
  [{ c: 'sea1', t: ' ~     ~      ~      ~       ~       ~       ~      ~      ~       ~      ~      ~  ' }],
  [{ c: 'sea2', t: '    ~~~~~      ~~~~~       ~~~~~~~       ~~~~~~      ~~~~~~~       ~~~~~       ~~~~~~   ' }],
];

function useSceneCols(min = 100) {
  const ref = useRef(null);
  const [cols, setCols] = useState(min);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const probe = document.createElement('span');
      probe.textContent = '0123456789';
      probe.style.visibility = 'hidden';
      probe.style.position = 'absolute';
      probe.style.whiteSpace = 'pre';
      probe.style.fontFamily = "'JetBrains Mono', monospace";
      probe.style.fontSize = getComputedStyle(el).fontSize;
      el.appendChild(probe);
      const charWidth = probe.offsetWidth / 10;
      el.removeChild(probe);
      setCols(Math.max(min, Math.floor(el.clientWidth / charWidth)));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [min]);

  return [ref, cols];
}

export default function ShipScene() {
  const [ref, cols] = useSceneCols();

  return (
    <div
      ref={ref}
      style={{
        whiteSpace: 'pre',
        fontSize: 'clamp(9px, 0.72vw, 11px)',
        lineHeight: 1.05,
        fontFamily: "'JetBrains Mono', monospace",
        color: C.accent,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {HERO.map((hero, i) => (
        <SceneRow
          key={i}
          hero={hero}
          tile={SHIP_TILES[i] ?? SKIES[i]}
          cols={cols}
          tileStart={SHIP_TILES[i] ? FLEET_START : SKY_START}
        />
      ))}
      {SEA.map((hero, i) => (
        <SceneRow key={`sea-${i}`} hero={hero} tile={SEA_TILES[i]} cols={cols} />
      ))}
    </div>
  );
}
