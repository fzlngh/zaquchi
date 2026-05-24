import { useState, useCallback } from 'react';
import { QD, GD, TD, RD, TPLS } from '../data/content';

type GameType = 'quiz' | 'guess' | 'tot' | 'reverse' | 'tap' | null;

interface GameModalProps {
  gameType: GameType;
  onClose: () => void;
}

export function GameModal({ gameType, onClose }: GameModalProps) {
  const [idx, setIdx] = useState(0);
  const [sc, setSc] = useState(0);
  const [ti, setTi] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [tap, setTap] = useState(0);
  const [tapMsg, setTapMsg] = useState('tap to count');
  const [popAnim, setPopAnim] = useState(false);

  const reset = useCallback(() => {
    setIdx(0); setSc(0); setTi(0);
    setFeedback(''); setShowNext(false); setDisabled(false);
    setTap(0); setTapMsg('tap to count');
  }, []);

  const fb_ = (txt: string) => {
    setFeedback(txt);
    setShowNext(true);
    setDisabled(true);
  };

  const handleNext = () => {
    setFeedback(''); setShowNext(false); setDisabled(false);
    if (gameType === 'quiz') setIdx(i => i + 1);
    else if (gameType === 'guess') setIdx(i => i + 1);
    else if (gameType === 'tot') setTi(i => i + 1);
    else if (gameType === 'reverse') setIdx(i => i + 1);
  };

  const doTap = () => {
    const next = tap + 1;
    setTap(next);
    setPopAnim(true);
    setTimeout(() => setPopAnim(false), 88);
    const i = Math.min(next, TPLS.length - 1);
    setTapMsg(TPLS[i]);
  };

  const renderQuiz = () => {
    const q = QD[idx];
    if (!q) return (
      <div style={{ textAlign: 'center', padding: '1.1rem' }}>
        <div className="gqq" style={{ fontSize: '1.35rem' }}>score: {sc}/{QD.length}</div>
        <div className="prose" style={{ textAlign: 'center', marginTop: '0.6rem' }}>
          {sc === QD.length ? 'okay you actually pay attention.' : 'room for improvement. but okay.'}
        </div>
      </div>
    );
    return (
      <>
        <div className="gqq">{q.q}</div>
        <div className="gop">
          {q.o.map(o => (
            <button key={o} className="go" disabled={disabled} onClick={() => {
              if (o === q.c) setSc(s => s + 1);
              fb_(o === q.c ? q.fc : q.fw);
            }}>{o}</button>
          ))}
        </div>
        <div className={`gf ${feedback ? 'on' : ''}`}>{feedback}</div>
        <button className={`gn ${showNext ? 'on' : ''}`} onClick={handleNext}>next →</button>
        <div style={{ fontFamily: "'Syne Mono',monospace", fontSize: '0.56rem', color: 'var(--t4)', textAlign: 'right', marginTop: '0.35rem' }}>{idx + 1}/{QD.length}</div>
      </>
    );
  };

  const renderGuess = () => {
    const q = GD[idx];
    if (!q) return <div style={{ textAlign: 'center', padding: '1.1rem' }}><div className="gqq">done. you know the memories.</div></div>;
    return (
      <>
        <div className="gqq" style={{ fontSize: '0.78rem', fontStyle: 'normal', color: 'var(--t4)', marginBottom: '0.38rem' }}>clue:</div>
        <div className="gqq">"{q.cl}"</div>
        <div className="gop">
          {q.o.map(o => (
            <button key={o} className="go" disabled={disabled} onClick={() => fb_(o === q.c ? q.fc : q.fw)}>{o}</button>
          ))}
        </div>
        <div className={`gf ${feedback ? 'on' : ''}`}>{feedback}</div>
        <button className={`gn ${showNext ? 'on' : ''}`} onClick={handleNext}>next →</button>
      </>
    );
  };

  const renderTot = () => {
    const it = TD[ti];
    if (!it) return <div style={{ textAlign: 'center', padding: '1.1rem' }}><div className="gqq">that's it. you know yourself.</div></div>;
    return (
      <>
        <div className="gqq" style={{ fontFamily: "'Syne Mono',monospace", fontSize: '0.58rem', color: 'var(--t4)', fontStyle: 'normal' }}>{ti + 1}/{TD.length}</div>
        <div className="tp2">
          <button className="tb" disabled={disabled} onClick={() => fb_(it.fa)}>{it.a}</button>
          <button className="tb" disabled={disabled} onClick={() => fb_(it.fb)}>{it.b}</button>
        </div>
        <div className={`gf ${feedback ? 'on' : ''}`}>{feedback}</div>
        <button className={`gn ${showNext ? 'on' : ''}`} onClick={handleNext}>next →</button>
      </>
    );
  };

  const renderReverse = () => {
    const q = RD[idx];
    if (!q) return <div style={{ textAlign: 'center', padding: '1.1rem' }}><div className="gqq">okay. you get the point.</div></div>;
    return (
      <>
        <div className="gqq">{q.q}</div>
        <div className="gop">
          {q.o.map(o => (
            <button key={o} className="go" disabled={disabled} onClick={() => fb_(q.f)}>{o}</button>
          ))}
        </div>
        <div className={`gf ${feedback ? 'on' : ''}`}>{feedback}</div>
        <button className={`gn ${showNext ? 'on' : ''}`} onClick={handleNext}>next →</button>
      </>
    );
  };

  const renderTap = () => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "'Syne Mono',monospace", fontSize: '0.58rem', letterSpacing: '0.08em', color: 'var(--t4)', marginBottom: '0.85rem' }}>
        times zahira lived in my head today
      </div>
      <div className={`tpn ${popAnim ? 'pop' : ''}`}>{tap}</div>
      <div className="gf on" style={{ marginTop: '0.4rem' }}>{tapMsg}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="tpbtn" onClick={doTap}>💭</button>
      </div>
    </div>
  );

  return (
    <div className={`mb ${gameType ? 'on' : ''}`} id="gm" onClick={(e) => { if (e.target === e.currentTarget) { onClose(); reset(); } }}>
      <div className="mc">
        <button className="mcl" onClick={() => { onClose(); reset(); }}>×</button>
        <div id="gi">
          {gameType === 'quiz' && renderQuiz()}
          {gameType === 'guess' && renderGuess()}
          {gameType === 'tot' && renderTot()}
          {gameType === 'reverse' && renderReverse()}
          {gameType === 'tap' && renderTap()}
        </div>
      </div>
    </div>
  );
}

export type { GameType };
