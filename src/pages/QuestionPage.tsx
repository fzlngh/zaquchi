import { useState } from 'react';

interface QuestionPageProps {
  active: boolean;
  onYes: () => void;
  onBack?: () => void;
  showBack?: boolean;
}

export function QuestionPage({ active, onYes }: QuestionPageProps) {
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState<{ left?: string; top?: string; position?: 'absolute' | 'relative' }>({});
  const [noText, setNoText] = useState('engga');

  const handleNo = () => {
    const next = noCount + 1;
    setNoCount(next);
    if (next >= 4) {
      setNoText('ga salah lagi kan?');
      return;
    }
    const mX = Math.min(window.innerWidth * 0.2, 88);
    const wrap = document.getElementById('qbs');
    if (!wrap) return;
    setNoPos({
      position: 'absolute',
      left: (wrap.offsetWidth / 2 + (Math.random() - 0.5) * mX * 2) + 'px',
      top: (wrap.offsetHeight / 2 + (Math.random() - 0.5) * 28) + 'px',
    });
  };

  const handleNoClick = noCount >= 4 ? onYes : handleNo;

  return (
    <div className={`page ${active ? 'in' : ''}`} id="p-q" style={{ textAlign: 'center', gap: '2.5rem' }}>
      <div className="qt" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(1.8rem,7vw,2.8rem)',
        fontStyle: 'italic',
        color: 'var(--t1)',
        padding: '0 16px',
        position: 'relative',
        zIndex: 2,
      }}>
        kamu sayang aku gak?
      </div>
      <div id="qbs" style={{
        display: 'flex', gap: '1rem', justifyContent: 'center',
        position: 'relative', width: '100%', maxWidth: 290, height: 60, alignItems: 'center', zIndex: 2,
      }}>
        <button
          className="qb"
          id="btn-yes"
          onClick={onYes}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.75), rgba(220,238,255,0.55))',
            border: '1px solid rgba(255,255,255,0.8)',
            borderRadius: 100, color: 'var(--t2)',
            fontFamily: "'Syne Mono', monospace", fontSize: '0.8rem',
            letterSpacing: '0.06em', padding: '0.62rem 1.75rem', cursor: 'pointer',
            transition: 'all 0.3s', whiteSpace: 'nowrap',
            boxShadow: '0 2px 12px rgba(100,160,230,0.12), inset 0 1px 0 rgba(255,255,255,0.85)',
            backdropFilter: 'blur(10px)',
          }}
        >iya</button>
        <button
          className="qb"
          id="btn-no"
          onClick={handleNoClick}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.75), rgba(220,238,255,0.55))',
            border: '1px solid rgba(255,255,255,0.8)',
            borderRadius: 100, color: 'var(--t2)',
            fontFamily: "'Syne Mono', monospace", fontSize: '0.8rem',
            letterSpacing: '0.06em', padding: '0.62rem 1.75rem', cursor: 'pointer',
            transition: 'all 0.3s', whiteSpace: 'nowrap',
            boxShadow: '0 2px 12px rgba(100,160,230,0.12), inset 0 1px 0 rgba(255,255,255,0.85)',
            backdropFilter: 'blur(10px)',
            ...noPos,
          }}
        >{noText}</button>
      </div>
    </div>
  );
}
