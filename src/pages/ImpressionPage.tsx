import { useState } from 'react';
import { QNA } from '../data/content';

interface ImpressionPageProps {
  active: boolean;
  onNext: () => void;
}

export function ImpressionPage({ active, onNext }: ImpressionPageProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const answer = (i: number, a: 'y' | 'n') => {
    setAnswers(prev => ({ ...prev, [i]: a === 'y' ? QNA[i].fy : QNA[i].fn }));
  };

  return (
    <div className={`page sc ${active ? 'in' : ''}`} id="p-imp">
      <div className="inn">
        <div className="disp">before i knew you better</div>
        <div className="eye">this is just me trying to understand you better.</div>
        <div className="prose" style={{ marginBottom: '1.4rem' }}>
          <p>Kesan pertama itu nggak selalu langsung jelas. Kadang keliatan biasa aja dari luar, tapi semakin lama kamu kenal seseorang, semakin banyak hal yang baru kelihatan.</p>
          <p>Awalnya, kamu keliatan seperti orang yang tenang. Nggak banyak ngomong, tapi setiap kali ngomong selalu ada yang bisa diinget.</p>
          <p>Ternyata beda setelah kenal. Banyak hal yang nggak keliatan dari luar — cara kamu perhatiin hal kecil, cara kamu care tanpa perlu bilang langsung.</p>
        </div>
        <div className="div-line" />
        <div className="eye" style={{ marginBottom: '0.75rem' }}>quick questions</div>
        <div id="qlist">
          {QNA.map((item, i) => (
            <div key={i} className="qi">
              <div className="qq">{item.q}</div>
              <div className="qbs2">
                <button className="qb2" onClick={() => answer(i, 'y')}>yes</button>
                <button className="qb2" onClick={() => answer(i, 'n')}>no</button>
              </div>
              <div className={`qr ${answers[i] ? 'on' : ''}`}>{answers[i] || ''}</div>
            </div>
          ))}
        </div>
        <button className="nb" onClick={onNext}>next <span className="ar">→</span></button>
      </div>
    </div>
  );
}
