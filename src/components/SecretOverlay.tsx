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
      { t: "yey, you found this a place \n a little deeper than the pages before.\n if you've made it this far, then you've probably noticed that not every part of this website was made with the same feeling.", d: 500 },
      { t: "some pages were written when i was happy. \nsome when i felt motivated.\nsome when i felt grateful.\nand some when i was simply tired.\nthis is one of those pages.\ni think one of the things that frustrated me the most was never knowing whether what i felt actually mattered to you.\nthere were many moments when i wanted to tell you something, when i wanted to talk about what was happening in my life, what was bothering me, what was making me happy, or what was making me fall apart.\nbut somehow, i often ended up keeping it to myself.\nsometimes because the timing never felt right.\nsometimes because the conversation went somewhere else.\nsometimes because i felt like there wasn't much space for it.\nand after a while, i stopped trying as much.\nnot because i didn't want to tell you.\nbecause it became easier to stay quiet.\ni've spent a long time feeling like i always had to understand your side.\nthat i had to remind myself that communication wasn't easy for you.\nthat you expressed care differently.\nthat you had your own way of dealing with things.\nand i do understand that.\ni really do.\nbut understanding something doesn't always make it hurt less.\nsometimes i wanted you to notice without me having to explain everything first.\nsometimes i wanted you to realize i wasn't doing well.\nsometimes i wanted you to care loudly enough that i wouldn't have to wonder.\nand maybe that expectation was unfair.\ni don't know.\nthere were moments when i felt disappointed, pulled away, and convinced myself that i should stop caring so much.\ni even tried.\nbut every time i thought about leaving everything behind, i remembered how much time had already passed.\nhow many conversations we had shared.how many memories had quietly accumulated. \nand somehow, walking away never felt as easy as i imagined.\nwhat confused me the most was that while i was thinking about all of this, you often seemed completely fine.", d: 2200 },
      { t: "aku ga selalu nunjukin semuanya \n tapi aku peduli", d: 4200 },
      { t: 'PHOTO', d: 7500, photo: secretPhotos[0] },
      { t: 'PHOTO', d: 8500, photo: secretPhotos[1] },
      { t: 'PHOTO', d: 9500, photo: secretPhotos[2] },
      { t: 'PHOTO', d: 10500, photo: secretPhotos[3] },
      { t: 'PHOTO', d: 11500, photo: secretPhotos[4] },
      { t: 'PHOTO', d: 12500, photo: secretPhotos[5] },
      { t: 'PHOTO', d: 13500, photo: secretPhotos[6] },
      { t: 'PHOTO', d: 14500, photo: secretPhotos[7] },
      { t: "so i started questioning myself instead.\nmaybe i was being too sensitive.\nmaybe i was overthinking.\nmaybe i was creating problems that didn't actually exist.\ni still don't know the answer.\nthe truth is, i don't think either of us handled everything perfectly.\ni know i have my own flaws.\ni care too much sometimes.\ni think too much.\ni expect too much from small things.\nand a lot of my disappointment probably came from those expectations.\nbut that doesn't mean the feelings weren't real.\nthis website has existed through more versions of me than you will probably ever know.\nit started a long time ago.\nsome parts were rewritten.\nsome parts were deleted.\nsome parts survived.\nand every page carries a different version of how i felt at that moment.\nthat's why this website isn't perfect.\nbecause neither was the person making it.\nthere were times when i wondered if i would ever finish it.\ntimes when i wondered if i would ever send it.\ntimes when i wondered if you would even care.\nand honestly, i still don't know.\nbut i finished it anyway.\nnot because i was certain of the outcome.\nbut because stopping halfway felt worse.\nif you're reading this now, i don't want an explanation.\ni don't want a repayment.\ni don't want you to feel guilty.\nthis page isn't here to make you apologize.\nit's here because these feelings existed, and pretending they didn't would make this website less honest than it deserves to be.\ni'm still disappointed about some things.\ni'm still frustrated about some things.\nthere are conversations we'll probably never have.\nand feelings i'll probably never explain completely.\nbut despite all of that, i'm still grateful that i met you.\nand maybe that's the strangest part of all.\nfor all the things that went wrong,\nfor all the moments that hurt,\nfor all the times i felt unheard,\ni still can't look at this story and call it a mistake.\nmaybe that's why i kept going.\nmaybe that's why this website exists.\nor maybe i just cared more than i knew what to do with.", d: 13400 },
      { t: 'kita lucu banget yaaaaaa kaloo ketemuu\n aku selalu senang dan tenang disitu', d: 15200 },
      { t: 'PHOTO', d: 17000, photo: secretPhotos[8] },
      { t: 'PHOTO', d: 18000, photo: secretPhotos[9] },
      { t: 'stay with me', d: 19000, fin: true },
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
