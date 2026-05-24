import { useEffect, useRef } from 'react';

interface SecretOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SecretOverlay({ open, onClose }: SecretOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollTopRef = useRef<HTMLButtonElement>(null);

  // Scroll-to-top button visibility
  useEffect(() => {
    const ov = overlayRef.current;
    const btn = scrollTopRef.current;
    if (!ov || !btn) return;
    const onScroll = () => {
      if (ov.scrollTop > 80) btn.classList.add('visible');
      else btn.classList.remove('visible');
    };
    ov.addEventListener('scroll', onScroll);
    return () => ov.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const ov = overlayRef.current;
    const inner = innerRef.current;
    if (!ov || !inner) return;

    // Reset scroll
    ov.scrollTop = 0;

    // Clear previous
    inner.innerHTML = '';
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    // Floating stars
    const stars: HTMLDivElement[] = [];
    for (let i = 0; i < 50; i++) {
      const s = document.createElement('div');
      s.className = 'xstar';
      const sz = Math.random() * 2.2 + 0.4;
      s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--xd:${(Math.random()*3+1.5).toFixed(1)}s;--xdl:${(Math.random()*2.5).toFixed(1)}s;position:fixed;`;
      ov.appendChild(s);
      stars.push(s);
    }

    // Secret photo paths (10 photos)
    const secretPhotos = [
      './photos/secret1.jpg',
      './photos/secret2.jpg',
      './photos/secret3.jpg',
      './photos/secret4.jpg',
      './photos/secret5.jpg',
      './photos/secret6.jpg',
      './photos/secret7.jpg',
      './photos/secret8.jpg',
      './photos/secret9.jpg',
      './photos/secret10.jpg',
    ];

    const lines: { t: string; d: number; fin?: boolean; photo?: string }[] = [
      { t: 'you found this…', d: 500 },
      { t: 'berarti kamu orang yang merhatiin hal kecil', d: 2200 },
      { t: 'dan mungkin itu alasan kenapa kamu berarti buat aku', d: 4200 },
      { t: 'PHOTO', d: 5800, photo: secretPhotos[0] },
      { t: 'PHOTO', d: 6800, photo: secretPhotos[1] },
      { t: 'PHOTO', d: 7800, photo: secretPhotos[2] },
      { t: 'PHOTO', d: 8800, photo: secretPhotos[3] },
      { t: 'PHOTO', d: 9800, photo: secretPhotos[4] },
      { t: 'PHOTO', d: 10800, photo: secretPhotos[5] },
      { t: 'PHOTO', d: 11600, photo: secretPhotos[6] },
      { t: 'PHOTO', d: 12200, photo: secretPhotos[7] },
      { t: 'aku ga selalu nunjukin semuanya', d: 13400 },
      { t: 'tapi aku peduli', d: 15200 },
      { t: 'PHOTO', d: 16000, photo: secretPhotos[8] },
      { t: 'PHOTO', d: 16800, photo: secretPhotos[9] },
      { t: 'stay with me', d: 18000, fin: true },
    ];

    lines.forEach(l => {
      const tid = setTimeout(() => {
        if (l.t === 'PHOTO') {
          const ph = document.createElement('div');
          ph.className = 'sph';
          const img = document.createElement('img');
          img.src = l.photo!;
          img.alt = 'secret photo';
          img.onerror = () => {
            ph.innerHTML = '🌙';
          };
          ph.appendChild(img);
          inner.appendChild(ph);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => { ph.classList.add('on'); });
          });
        } else {
          const el = document.createElement('div');
          el.className = 'sl' + (l.fin ? ' fin' : '');
          el.textContent = l.t;
          inner.appendChild(el);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => { el.classList.add('on'); });
          });
        }
        // Auto-scroll to bottom as content appears
        setTimeout(() => {
          ov.scrollTo({ top: ov.scrollHeight, behavior: 'smooth' });
        }, 100);
      }, l.d);
      timersRef.current.push(tid);
    });

    return () => {
      timersRef.current.forEach(clearTimeout);
      stars.forEach(s => s.remove());
    };
  }, [open]);

  return (
    <>
      <div ref={overlayRef} id="sec-ov" className={open ? 'on' : ''}>
        <button id="sec-close" onClick={onClose} style={{
          position: 'fixed', top: 18, right: 20,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(210,232,255,0.5))',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: '50%',
          width: 34, height: 34,
          color: 'var(--t3)', fontSize: '1.1rem', cursor: 'pointer', zIndex: 812,
          transition: 'color 0.2s, background 0.2s, box-shadow 0.2s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(100,160,230,0.15), inset 0 1px 0 rgba(255,255,255,0.85)',
          backdropFilter: 'blur(10px)',
        }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.95)';
            (e.currentTarget as HTMLElement).style.color = 'var(--t1)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(210,232,255,0.5))';
            (e.currentTarget as HTMLElement).style.color = 'var(--t3)';
          }}
        >×</button>
        <div className="sec-inner" ref={innerRef}></div>
      </div>

      {/* Scroll to top button */}
      <button
        ref={scrollTopRef}
        id="sec-scroll-top"
        style={{ display: open ? 'flex' : 'none' }}
        onClick={() => overlayRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
      >↑</button>
    </>
  );
}
