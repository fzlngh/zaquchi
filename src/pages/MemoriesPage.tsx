import { MD } from '../data/content';

interface MemoriesPageProps {
  active: boolean;
  onNext: () => void;
  onOpenMemory: (key: string) => void;
}

const items = Object.entries(MD).map(([key, val]) => ({ key, e: val.e }));

export function MemoriesPage({ active, onNext, onOpenMemory }: MemoriesPageProps) {
  return (
    <div className={`page ${active ? 'in' : ''}`} id="p-mem" style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', zIndex: 2, padding: '0 16px' }}>
        <div className="disp">memories</div>
        <div className="eye">little things i still remember</div>
        <div className="mg" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '0.8rem', maxWidth: 320, margin: '1.4rem auto 0',
        }}>
          {items.map(({ key, e }) => (
            <div
              key={key}
              className="mi"
              onClick={() => onOpenMemory(key)}
              style={{
                aspectRatio: '1',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(215,235,255,0.5))',
                border: '1px solid rgba(255,255,255,0.8)',
                borderRadius: 18,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'clamp(1.5rem,5vw,1.85rem)',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.3s',
                boxShadow: '0 4px 16px rgba(100,160,230,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px) scale(1.04)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px var(--glow)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(100,160,230,0.1)';
              }}
            >
              {e}
            </div>
          ))}
        </div>
        <button className="nb" style={{ marginLeft: 'auto', marginRight: 'auto' }} onClick={onNext}>
          continue <span className="ar">→</span>
        </button>
      </div>
    </div>
  );
}
