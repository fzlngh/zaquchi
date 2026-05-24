import { PAGES, DOT_FROM } from '../data/content';

interface NavProps {
  cur: number;
  onPrev: () => void;
  onSecret: () => void;
}

export function Nav({ cur, onPrev, onSecret }: NavProps) {
  const showBack = cur > 0 && cur < PAGES.length - 1;
  const showStar = cur >= DOT_FROM;
  const showDots = cur >= DOT_FROM;

  return (
    <>
      <button
        id="back"
        className={showBack ? 'on' : ''}
        onClick={onPrev}
        style={{
          position: 'fixed',
          top: 'calc(var(--safe-t) + 14px)',
          left: 18,
          zIndex: 400,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(220,238,255,0.55) 100%)',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: 100,
          color: 'var(--t2)',
          fontFamily: "'Syne Mono', monospace",
          fontSize: '0.67rem',
          letterSpacing: '0.08em',
          padding: '0.3rem 0.9rem',
          cursor: 'pointer',
          opacity: showBack ? 1 : 0,
          pointerEvents: showBack ? 'all' : 'none',
          transition: 'opacity 0.4s, color 0.3s, background 0.3s, box-shadow 0.3s, transform 0.2s',
          boxShadow: '0 2px 12px rgba(100,160,230,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateX(-1px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = '';
        }}
      >
        ← back
      </button>

      {/* Progress dots */}
      <div
        id="dots"
        style={{
          position: 'fixed',
          top: 'calc(var(--safe-t) + 20px)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 5,
          zIndex: 400,
          opacity: showDots ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 0.5s',
        }}
      >
        {PAGES.slice(DOT_FROM).map((_, i) => {
          const di = cur - DOT_FROM;
          let cls = '';
          if (i === di) cls = 'a';
          else if (i < di) cls = 'd';
          return (
            <div
              key={i}
              className={`dot ${cls}`}
              style={{
                width: 5, height: 5, borderRadius: '50%',
                background: cls === 'a' ? 'var(--accent)' : cls === 'd' ? 'var(--t3)' : 'var(--t5)',
                transform: cls === 'a' ? 'scale(1.45)' : 'scale(1)',
                boxShadow: cls === 'a' ? '0 0 8px rgba(100,160,230,0.75)' : 'none',
                transition: 'all 0.4s',
              }}
            />
          );
        })}
      </div>

      {/* Secret star */}
      <div
        id="ss-btn"
        onClick={onSecret}
        style={{
          position: 'fixed',
          top: 'calc(var(--safe-t) + 14px)',
          right: 18,
          zIndex: 400,
          cursor: 'pointer',
          opacity: showStar ? 1 : 0,
          pointerEvents: showStar ? 'all' : 'none',
          transition: 'opacity 0.6s',
          width: 42, height: 42,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style={{ width: 30, height: 30, overflow: 'visible', animation: 'ssSpin 14s linear infinite, ssPulse 2.8s ease-in-out infinite' }}>
          <style>{`
            @keyframes ssSpin { to { transform: rotate(360deg); } }
            @keyframes ssPulse {
              0%,100%{ filter: drop-shadow(0 0 4px rgba(100,160,230,0.6)) drop-shadow(0 0 8px rgba(80,140,220,0.3)); }
              50%{ filter: drop-shadow(0 0 14px rgba(130,190,255,0.95)) drop-shadow(0 0 28px rgba(100,160,230,0.6)); }
            }
          `}</style>
          <circle cx="20" cy="20" r="17" stroke="rgba(100,160,230,0.2)" strokeWidth="0.8" fill="none"/>
          <circle cx="20" cy="20" r="14" stroke="rgba(100,160,230,0.1)" strokeWidth="0.5" fill="none" strokeDasharray="3 5"/>
          <path d="M20 3 L21.6 14.2 L29.3 8.7 L23.8 16.4 L35 18 L23.8 19.6 L29.3 27.3 L21.6 21.8 L20 33 L18.4 21.8 L10.7 27.3 L16.2 19.6 L5 18 L16.2 16.4 L10.7 8.7 L18.4 14.2 Z"
            fill="rgba(100,170,255,0.9)" stroke="rgba(160,210,255,0.6)" strokeWidth="0.4"/>
          <path d="M20 10 L20.7 16.8 L24.5 12.5 L21.7 16.8 L28 18 L21.7 19.2 L24.5 23.5 L20.7 19.2 L20 26 L19.3 19.2 L15.5 23.5 L18.3 19.2 L12 18 L18.3 16.8 L15.5 12.5 L19.3 16.8 Z"
            fill="rgba(200,230,255,0.6)"/>
          <circle cx="20" cy="20" r="1.8" fill="rgba(230,245,255,0.95)"/>
          <line x1="20" y1="6" x2="20" y2="0" stroke="rgba(140,200,255,0.35)" strokeWidth="0.6"/>
          <line x1="20" y1="34" x2="20" y2="40" stroke="rgba(140,200,255,0.35)" strokeWidth="0.6"/>
          <line x1="6" y1="20" x2="0" y2="20" stroke="rgba(140,200,255,0.35)" strokeWidth="0.6"/>
          <line x1="34" y1="20" x2="40" y2="20" stroke="rgba(140,200,255,0.35)" strokeWidth="0.6"/>
        </svg>
      </div>
    </>
  );
}
