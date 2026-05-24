import { useEffect } from 'react';

interface IntroPageProps {
  active: boolean;
  onNext: () => void;
  onBack?: () => void;
  showBack?: boolean;
}

export function IntroPage({ active, onNext, onBack, showBack }: IntroPageProps) {
  useEffect(() => {
    if (!active) return;
    const lines = document.querySelectorAll<HTMLElement>('#ilines .il');
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach(el => {
      const d = parseInt(el.dataset.d || '0');
      const t = setTimeout(() => el.classList.add('s'), d);
      timers.push(t);
    });
    const btnT = setTimeout(() => {
      const b = document.getElementById('inb');
      if (b) { b.style.opacity = '1'; b.style.pointerEvents = 'all'; }
    }, 4800);
    timers.push(btnT);
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <div className={`page ${active ? 'in' : ''}`} id="p-intro" style={{ textAlign: 'center' }}>
      <div id="ilines" style={{ textAlign: 'center' }}>
        {[
          { text: '"hi zahira"', d: 300, big: true },
          { text: '"i made this for you"', d: 1200 },
          { text: '"read it slowly ya"', d: 2100 },
          { text: '"don\'t rush, okay?"', d: 3000 },
          { text: '"just stay here for a bit"', d: 3900 },
        ].map((item, i) => (
          <div
            key={i}
            className={`il${item.big ? ' b' : ''}`}
            data-d={item.d}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: item.big ? 'var(--t1)' : 'var(--t2)',
              fontSize: item.big ? 'clamp(2.2rem,9vw,3.1rem)' : 'clamp(1rem,4vw,1.35rem)',
              fontWeight: item.big ? 400 : 300,
              marginBottom: item.big ? '0.55rem' : undefined,
              padding: '0.26rem 0',
              opacity: 0,
              transform: 'translateY(12px)',
              transition: 'opacity 0.9s, transform 0.9s',
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      <button
        className="nb"
        id="inb"
        style={{ opacity: 0, pointerEvents: 'none' }}
        onClick={onNext}
      >
        continue <span className="ar">→</span>
      </button>
      <style>{`
        .il.s { opacity: 1 !important; transform: none !important; }
      `}</style>
    </div>
  );
}
