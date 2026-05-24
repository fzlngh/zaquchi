import { useEffect, useRef } from 'react';

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const SC = canvas.getContext('2d')!;
    let W: number, H: number;

    const STARS: any[] = [];
    const SHOOTS: any[] = [];
    const N = 280;
    let animId: number;

    function rsz() {
      W = canvas!.width = innerWidth;
      H = canvas!.height = innerHeight;
    }
    rsz();
    window.addEventListener('resize', rsz);

    for (let i = 0; i < N; i++) {
      STARS.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.4 + 0.1,
        baseO: Math.random() * 0.45 + 0.06,
        phase: Math.random() * Math.PI * 2,
        spd: Math.random() * 0.009 + 0.003,
        col: [
          Math.round(120 + Math.random() * 80),
          Math.round(160 + Math.random() * 60),
          255
        ]
      });
    }

    const shootInt = setInterval(() => {
      if (Math.random() < 0.4) {
        const a = Math.random() * 0.5 + 0.05;
        SHOOTS.push({
          x: Math.random() * W, y: Math.random() * H * 0.55,
          vx: Math.cos(a) * 9, vy: Math.sin(a) * 9,
          life: 1, len: Math.random() * 130 + 60, w: Math.random() * 1.2 + 0.6
        });
      }
    }, 2600);

    function draw() {
      SC.clearRect(0, 0, W, H);
      const t = performance.now() * 0.001;
      STARS.forEach(s => {
        const o = s.baseO * (0.55 + 0.45 * Math.sin(t * s.spd * 6 + s.phase));
        SC.beginPath();
        SC.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        SC.fillStyle = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${o})`;
        SC.fill();
      });
      for (let i = SHOOTS.length - 1; i >= 0; i--) {
        const sh = SHOOTS[i];
        sh.x += sh.vx; sh.y += sh.vy; sh.life -= 0.017;
        if (sh.life <= 0) { SHOOTS.splice(i, 1); continue; }
        const tx = sh.x - sh.vx * (sh.len / 9), ty = sh.y - sh.vy * (sh.len / 9);
        const g = SC.createLinearGradient(tx, ty, sh.x, sh.y);
        g.addColorStop(0, 'rgba(140,190,255,0)');
        g.addColorStop(1, `rgba(160,210,255,${sh.life * 0.9})`);
        SC.beginPath(); SC.moveTo(tx, ty); SC.lineTo(sh.x, sh.y);
        SC.strokeStyle = g; SC.lineWidth = sh.w; SC.stroke();
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', rsz);
      clearInterval(shootInt);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="sf"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
