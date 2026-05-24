import { useState, useRef } from 'react';

interface PasswordPageProps {
  active: boolean;
  onUnlock: () => void;
  onBack?: () => void;
  showBack?: boolean;
}

const PH = ['jahat', 'english', '4 huruf… seriusan gatau?'];

export function PasswordPage({ active, onUnlock }: PasswordPageProps) {
  const [hint, setHint] = useState('');
  const [success, setSuccess] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState('');
  const pwTRef = useRef(0);

  const chkpw = (val: string) => {
    if (val.toLowerCase() === 'liar') {
      setHint('');
      setSuccess('okeii gudd — tapi… jangan lakuin itu ya 🙂');
      setDisabled(true);
      setValue('');
      setTimeout(() => onUnlock(), 1800);
    } else if (val.length >= 4) {
      setHint(PH[Math.min(pwTRef.current++, PH.length - 1)]);
      setValue('');
    }
  };

  return (
    <div className={`page ${active ? 'in' : ''}`} id="p-pw" style={{ gap: '1.5rem', textAlign: 'center' }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(1.3rem,6vw,1.9rem)',
        fontStyle: 'italic',
        color: 'var(--t1)',
        padding: '0 20px',
        position: 'relative', zIndex: 2,
      }}>
        "hal yang aku benci…"
      </div>
      <div style={{
        fontFamily: "'Syne Mono', monospace",
        fontSize: '0.6rem',
        color: 'var(--t4)',
        letterSpacing: '0.14em',
        position: 'relative', zIndex: 2,
      }}>
        jawab dengan satu kata
      </div>
      <input
        type="password"
        id="pwi"
        placeholder="· · · ·"
        maxLength={10}
        disabled={disabled}
        value={value}
        onChange={e => { setValue(e.target.value); chkpw(e.target.value); }}
        autoComplete="off"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(215,235,255,0.6))',
          border: '1px solid rgba(255,255,255,0.85)',
          borderRadius: 14,
          padding: '0.85rem 1.4rem',
          color: 'var(--t1)',
          fontFamily: "'Syne Mono', monospace",
          fontSize: '1.1rem',
          letterSpacing: '0.3em',
          textAlign: 'center',
          width: 180,
          outline: 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          WebkitAppearance: 'none',
          position: 'relative', zIndex: 2,
          boxShadow: '0 4px 20px rgba(100,160,230,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
        }}
      />
      <div style={{
        fontFamily: "'Syne Mono', monospace",
        fontSize: '0.66rem',
        color: 'var(--t4)',
        minHeight: '1rem',
        letterSpacing: '0.06em',
        position: 'relative', zIndex: 2,
      }}>{hint}</div>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.05rem',
        fontStyle: 'italic',
        color: 'var(--accent)',
        minHeight: '1.4rem',
        opacity: success ? 1 : 0,
        transition: 'opacity 0.6s',
        position: 'relative', zIndex: 2,
      }}>{success}</div>
    </div>
  );
}
