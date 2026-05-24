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
        <p>Somewhere along the way, that became the name I got used to carrying for you. The one that felt a little more special because it was only mine to call you.</p>
        <p>Maybe it's silly. Maybe it's strange. But this was the meaning I quietly made for you.</p>
        <p><em>And maybe that's why it stayed.</em></p>
      </div>
    </div>
  );
}
