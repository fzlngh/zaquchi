interface ThankYouPageProps {
  active: boolean;
  onNext: () => void;
}

export function ThankYouPage({ active, onNext }: ThankYouPageProps) {
  return (
    <div className={`page sc ${active ? 'in' : ''}`} id="p-ty">
      <div className="inn">
        <div className="disp">thank you, truly</div>
        <div className="eye">for all the little things</div>
        <div className="div-line" />
        <div className="prose">
          <p>Thank you. For all the effort, for all the little things, and for all the care you probably thought was small, but never really felt small to me.</p>
          <p>I don't think you realize how much I noticed. The way you remembered things. The way you gave effort even in small moments. The way you cared in quiet ways that were easy to miss if no one was paying attention.</p>
          <p>But I was. And I noticed more than I probably ever said.</p>
          <p>Thank you for the time. For the thought. For the attention. For the care that always felt more genuine than loud.</p>
          <p>You always had this quiet way of making things mean more than they looked. And maybe that is one of the things I appreciated most.</p>
          <p>Some people leave big impressions. You left careful ones. And somehow, those stay longer.</p>
          <p>So thank you. For all of it. More than I ever said, and probably more than you realized.</p>
        </div>
        <button className="nb" onClick={onNext}>next <span className="ar">→</span></button>
      </div>
    </div>
  );
}
