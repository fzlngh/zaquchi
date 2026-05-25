import { useEffect, useRef, useState } from 'react';
import { PhotoFrame } from '../components/PhotoFrame';

interface MusicPageProps {
  active: boolean;
  onNext: () => void;
}

export function MusicPage({ active, onNext }: MusicPageProps) {
  const [lyricIdx, setLyricIdx] = useState(0);
  const [lyricVisible, setLyricVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeStr, setTimeStr] = useState('0:00 / —');
  const [loadError, setLoadError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);


  // Sync isPlaying state with actual audio events (the reliable way)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay  = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => { setIsPlaying(false); setProgress(0); };
    const onError = () => setLoadError(true);

    const onTimeUpdate = () => {
      if (!audio.duration) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      setProgress(pct);
      const m  = Math.floor(audio.currentTime / 60);
      const s  = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
      const dm = Math.floor(audio.duration / 60);
      const ds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
      setTimeStr(`${m}:${s} / ${dm}:${ds}`);
    };

    audio.addEventListener('play',       onPlay);
    audio.addEventListener('playing',    onPlay);   // fires after buffering resolves
    audio.addEventListener('pause',      onPause);
    audio.addEventListener('ended',      onEnded);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('error',      onError);

    return () => {
      audio.removeEventListener('play',       onPlay);
      audio.removeEventListener('playing',    onPlay);
      audio.removeEventListener('pause',      onPause);
      audio.removeEventListener('ended',      onEnded);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('error',      onError);
    };
  }, []);

  // Toggle play/pause — let audio events drive the state, not manual setState
  const togPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      // Re-set src jika error sebelumnya (misal file belum ada lalu file ditaruh)
      if (loadError) {
        audio.load();
        setLoadError(false);
      }
      audio.play().catch(err => {
        console.warn('Audio play failed:', err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  };

  // Seek on progress bar click
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct  = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  };

  return (
    <div className={`page sc ${active ? 'in' : ''}`} id="p-mus">
      <div className="inn">
        <div className="disp">do you remember this?</div>
        <div className="eye">the one that took a while to understand</div>

        <PhotoFrame
          src="./photos/music-photo.jpg"
          alt="our song"
          label="our song"
        />

        <div className="mcard glass-card" style={{ borderRadius: 18, padding: '1.3rem', marginBottom: '1.4rem' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--t1)', marginBottom: '0.1rem' }}>
            blessed
          </div>
          <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '0.6rem', color: 'var(--t4)', letterSpacing: '0.1em', marginBottom: '0.9rem' }}>
            daniel caesar
          </div>


          {/* Player row */}
          <div className="ply" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>

            {/* Play / Pause button */}
            <button
              onClick={togPlay}
              title={isPlaying ? 'Pause' : 'Play'}
              style={{
                width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                background: isPlaying
                  ? 'linear-gradient(135deg, rgba(100,160,230,0.25), rgba(160,200,255,0.4))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(200,225,255,0.65))',
                border: '1px solid rgba(255,255,255,0.85)',
                color: 'var(--t2)', fontSize: isPlaying ? '1rem' : '0.82rem',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.25s',
                boxShadow: isPlaying
                  ? '0 0 18px rgba(100,160,230,0.45), inset 0 1px 0 rgba(255,255,255,0.7)'
                  : '0 2px 12px rgba(100,160,230,0.18), inset 0 1px 0 rgba(255,255,255,0.9)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>

            {/* Progress bar */}
            <div
              onClick={handleSeek}
              style={{
                flex: 1, height: 4, background: 'rgba(100,160,230,0.15)',
                borderRadius: 10, cursor: 'pointer', minWidth: 0,
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                height: '100%', width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                borderRadius: 10, transition: 'width 0.1s linear',
                boxShadow: '0 0 6px var(--glow)',
              }} />
            </div>

            {/* Time */}
            <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '0.58rem', color: 'var(--t4)', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {timeStr}
            </div>
          </div>

          {/* Error / hint */}
          {loadError && (
            <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '0.56rem', color: '#e08080', textAlign: 'center', marginTop: '0.55rem', letterSpacing: '0.05em' }}>
              file tidak ditemukan — taruh Blessed.mp3 di folder dist/
            </div>
          )}
        </div>

        {/* Hidden audio element — preload metadata only */}
        <audio ref={audioRef} src="./Blessed.mp3" preload="metadata" />

        <div className="div-line" />
        <div className="prose">
          <p>At first, I thought it was just a song. Just something nice to listen to, something calm, something soft. I didn't really get it at first. Not fully.</p>
          <p>But after listening to it again, and again, and a little more carefully I think I understand now. Maybe that was the point.</p>
          <p>Maybe it was never just about the song, but about what it was trying to say quietly. And maybe that's why it stayed. Not because I understood it immediately, but because I understood it later. And somehow, that made it mean more.</p>
          <p>So thank you. Not just for the song, but for the thought behind it. And even more for the gift. That was probably one of the most thoughtful things anyone has ever given me.</p>
          <p>You really didn't have to do all that. But you did. And I don't think you realize how much that meant to me.</p>
        </div>
        <button className="nb" onClick={onNext}>next <span className="ar">→</span></button>
      </div>
    </div>
  );
}
