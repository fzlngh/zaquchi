import { useState, useEffect } from 'react';
import './styles/globals.css';
import { PAGES, NEB, DOT_FROM } from './data/content';
import { Starfield } from './components/Starfield';
import { Nav } from './components/Nav';
import { MemoryModal } from './components/MemoryModal';
import { GameModal, GameType } from './components/GameModal';
import { SecretOverlay } from './components/SecretOverlay';
import { IntroPage } from './pages/IntroPage';
import { QuestionPage } from './pages/QuestionPage';
import { PasswordPage } from './pages/PasswordPage';
import { ProfilePage } from './pages/ProfilePage';
import { MemoriesPage } from './pages/MemoriesPage';
import { MusicPage } from './pages/MusicPage';
import { GamesPage } from './pages/GamesPage';
import { StoryPage } from './pages/StoryPage';
import { GraduationPage } from './pages/GraduationPage';
import { FuturePage } from './pages/FuturePage';
import { ThankYouPage } from './pages/ThankYouPage';
import { ImpressionPage } from './pages/ImpressionPage';
import { EndingPage } from './pages/EndingPage';

export default function App() {
  const [cur, setCur] = useState(0);
  const [prev_, setPrev_] = useState(-1);
  const [memKey, setMemKey] = useState<string | null>(null);
  const [gameType, setGameType] = useState<GameType>(null);
  const [secretOpen, setSecretOpen] = useState(false);
  const [nebStyle, setNebStyle] = useState(NEB['p-intro'] || '');

  const go = (idx: number) => {
    if (idx < 0 || idx >= PAGES.length) return;
    setPrev_(cur);
    setCur(idx);
    setNebStyle(NEB[PAGES[idx]] || '');
  };

  const prev = () => { if (cur > 0) go(cur - 1); };

  const isActive = (id: string) => PAGES[cur] === id;

  const pageClass = (id: string) => {
    const active = PAGES[cur] === id;
    const wasActive = PAGES[prev_] === id;
    if (active) return 'in';
    if (wasActive) return 'out';
    return '';
  };

  // Remove 'out' class after transition
  useEffect(() => {
    const t = setTimeout(() => setPrev_(-1), 800);
    return () => clearTimeout(t);
  }, [cur]);

  return (
    <>
      <Starfield />

      {/* Nebula background */}
      <div id="neb" style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: nebStyle,
        transition: 'background 1.5s cubic-bezier(0.4,0,0.2,1)',
      }} />

      {/* Floating glass orbs */}
      <div className="glass-orb" style={{
        width: 220, height: 220, top: '-60px', right: '-40px',
        '--orb-d': '16s', '--orb-dl': '0s', '--orb-o': '0.28',
      } as React.CSSProperties} />
      <div className="glass-orb" style={{
        width: 160, height: 160, bottom: '10%', left: '-50px',
        '--orb-d': '20s', '--orb-dl': '3s', '--orb-o': '0.22',
      } as React.CSSProperties} />
      <div className="glass-orb" style={{
        width: 100, height: 100, top: '40%', right: '5%',
        '--orb-d': '14s', '--orb-dl': '6s', '--orb-o': '0.18',
      } as React.CSSProperties} />

      <Nav cur={cur} onPrev={prev} onSecret={() => setSecretOpen(true)} />

      <IntroPage active={isActive('p-intro')} onNext={() => go(1)} onBack={prev} showBack={cur > 0} />
      <QuestionPage active={isActive('p-q')} onYes={() => go(2)} onBack={prev} showBack={cur > 0} />
      <PasswordPage active={isActive('p-pw')} onUnlock={() => go(3)} onBack={prev} showBack={cur > 0} />
      <ProfilePage active={isActive('p-pro')} onNext={() => go(4)} />
      <MemoriesPage active={isActive('p-mem')} onNext={() => go(5)} onOpenMemory={setMemKey} />
      <MusicPage active={isActive('p-mus')} onNext={() => go(6)} />
      <GamesPage active={isActive('p-gm')} onNext={() => go(7)} onOpenGame={setGameType} />
      <StoryPage active={isActive('p-st')} onNext={() => go(8)} />
      <GraduationPage active={isActive('p-grad')} onNext={() => go(9)} />
      <FuturePage active={isActive('p-fut')} onNext={() => go(10)} />
      <ThankYouPage active={isActive('p-ty')} onNext={() => go(11)} />
      <ImpressionPage active={isActive('p-imp')} onNext={() => go(12)} />
      <EndingPage active={isActive('p-end')} />

      <MemoryModal memKey={memKey} onClose={() => setMemKey(null)} />
      <GameModal gameType={gameType} onClose={() => setGameType(null)} />
      <SecretOverlay open={secretOpen} onClose={() => setSecretOpen(false)} />
    </>
  );
}
