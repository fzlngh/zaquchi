import { PhotoFrame } from '../components/PhotoFrame';
interface ProfilePageProps {
  active: boolean;
  onNext: () => void;
}

export function ProfilePage({ active, onNext }: ProfilePageProps) {
  return (
    <div className={`page sc ${active ? 'in' : ''}`} id="p-pro">
      <div className="inn">
        <div className="ph" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div className="av" style={{
            width: 150, height: 90, borderRadius: '30%',
            background: 'var(--glass2)', border: '1px solid var(--border2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.9rem', flexShrink: 0,
            boxShadow: '0 0 26px var(--glow)',
          }}><PhotoFrame
          src="./photos/profile.jpg"
          alt="graduation"
          label="graduation"
        /></div>
          <div>
            <div className="pn" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.1rem,5vw,1.65rem)', fontStyle: 'italic', color: 'var(--t1)' }}>
              anggieta lituhayu tristyo
            </div>
          </div>
        </div>
        <div className="eye">profile data</div>
        <div className="pgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem 1.3rem', marginBottom: '1.3rem' }}>
          <div>
            <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.16em', color: 'var(--t4)', textTransform: 'uppercase', marginBottom: '0.14rem' }}>date of birth</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.97rem', color: 'var(--t1)', fontStyle: 'italic' }}>9 January 2010</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.16em', color: 'var(--t4)', textTransform: 'uppercase', marginBottom: '0.14rem' }}>school</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.97rem', color: 'var(--t1)', fontStyle: 'italic' }}>SMKN 1 Jakarta</div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.16em', color: 'var(--t4)', textTransform: 'uppercase', marginBottom: '0.14rem' }}>major</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.97rem', color: 'var(--t1)', fontStyle: 'italic' }}>Sistem Informasi Jaringan dan Aplikasi</div>
          </div>
        </div>
        <div className="div-line" />
        <div className="prose">
          <p>This website started as something small. At first, it was only a simple idea quiet, personal, and maybe a little unnecessary to anyone else. But some things feel too meaningful to be left as passing thoughts, so I turned them into something real.</p>
          <p>It was made as a small gift, and as a quiet way to celebrate someone who has reached the end of one chapter and is about to begin another. A small congratulations for finishing middle school, for making it through everything that came with it, and for becoming someone even stronger along the way.</p>
          <p>Not everything worth keeping has to be said out loud. Some things are better kept in places you can return to through pages, songs, memories, and small details left behind on purpose.</p>
          <p>Because some people leave more impact than they realize. Not always through big moments, but through small things that stay longer than expected.</p>
        </div>
        <button className="nb" onClick={onNext}>next <span className="ar">→</span></button>
      </div>
    </div>
  );
}
