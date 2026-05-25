import { PhotoFrame } from '../components/PhotoFrame';

interface EndingPageProps {
  active: boolean;
}

export function EndingPage({ active }: EndingPageProps) {
  return (
    <div className={`page ${active ? 'in' : ''}`} id="p-end" style={{ textAlign: 'center' }}>
      <div className="edt">— 2025 —</div>
      <div className="en">Zaquchi</div>
      <div className="es">— only for my zaquchi —</div>
      <div className="em">
        <span>ZA</span>hira &nbsp; <span>QU</span>raisya &nbsp; <span>CH</span>elsea &nbsp; <span>I</span>riadi
      </div>

      {/* Photo for "zaquchi" ending */}
      <PhotoFrame
        src="./photos/zaquchi-photo.jpg"
        alt="zaquchi"
        label="zaquchi"
        style={{ maxWidth: 260, marginBottom: '1rem' }}
        ratio="1/1"
      />

      <div className="prose" style={{ textAlign: 'center', maxWidth: 400, position: 'relative', zIndex: 2 }}>
        <p>At some point, I just got used to calling you that.At some point, I just got used to calling you that. I started using it a long time ago, mostly when talking about you to my friends.</p>
        <p>Somehow, "Zaquchi" became easier to say than your full name, and it just stuck.Maybe it's a little weird. Maybe you don't even like it that much.</p>
        <p><em>But that's where it came from, and that's why I still use it.</em></p>
      </div>
    </div>
  );
}
