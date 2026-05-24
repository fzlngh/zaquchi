import { GameType } from '../components/GameModal';

interface GamesPageProps {
  active: boolean;
  onNext: () => void;
  onOpenGame: (type: GameType) => void;
}

const games = [
  { type: 'quiz' as GameType, icon: '🧠', title: 'do i really know you?', sub: 'multiple choice quiz' },
  { type: 'guess' as GameType, icon: '🔍', title: 'guess the memory', sub: 'pick the right one' },
  { type: 'tot' as GameType, icon: '⚡', title: 'this or that', sub: 'quick choices' },
  { type: 'reverse' as GameType, icon: '🔄', title: 'reverse quiz', sub: 'how well do you know me?' },
  { type: 'tap' as GameType, icon: '👆', title: 'tap counter', sub: 'times zahira lived in my head', wide: true },
];

export function GamesPage({ active, onNext, onOpenGame }: GamesPageProps) {
  return (
    <div className={`page sc ${active ? 'in' : ''}`} id="p-gm">
      <div className="inn">
        <div className="disp">play something first?</div>
        <div className="eye">just so this doesn't get too serious.</div>
        <div className="gg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.72rem', marginTop: '0.9rem' }}>
          {games.map(g => (
            <div
              key={g.type}
              className="gc"
              onClick={() => onOpenGame(g.type)}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(215,235,255,0.5))',
                border: '1px solid rgba(255,255,255,0.8)',
                borderRadius: 16, padding: '1rem 0.92rem', cursor: 'pointer',
                transition: 'transform 0.22s, box-shadow 0.22s, border-color 0.22s',
                gridColumn: g.wide ? '1/-1' : undefined,
                maxWidth: g.wide ? 200 : undefined,
                boxShadow: '0 4px 16px rgba(100,160,230,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 26px var(--glow)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(100,160,230,0.08)';
              }}
            >
              <div style={{ fontSize: '1.25rem', marginBottom: '0.38rem' }}>{g.icon}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.93rem', fontStyle: 'italic', color: 'var(--t1)', marginBottom: '0.18rem', lineHeight: 1.3 }}>{g.title}</div>
              <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '0.56rem', color: 'var(--t4)', letterSpacing: '0.06em' }}>{g.sub}</div>
            </div>
          ))}
        </div>
        <button className="nb" onClick={onNext}>continue <span className="ar">→</span></button>
      </div>
    </div>
  );
}
