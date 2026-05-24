interface FuturePageProps {
  active: boolean;
  onNext: () => void;
}

export function FuturePage({ active, onNext }: FuturePageProps) {
  return (
    <div className={`page sc ${active ? 'in' : ''}`} id="p-fut">
      <div className="inn">
        <div className="disp">for your later days</div>
        <div className="eye">for whatever version of you reads this later</div>
        <div className="div-line" />
        <div className="prose">
          <p>I hope life feels gentler.</p>
          <p>I hope you're happy. Not loudly. Not perfectly. Just truly.</p>
          <p>I hope your days feel lighter. I hope your mind feels quieter. I hope your heart feels less heavy.</p>
          <p>I hope you're healthy. I hope you're resting enough. I hope life has been kind to you in the ways that matter.</p>
          <p>I hope the things you once worried about have become smaller now. I hope the things you once dreamed about have started finding their way to you.</p>
          <p>I hope you still laugh easily. I hope soft things still make you smile. I hope you still let yourself be cared for.</p>
          <p>And wherever life takes you, I hope it takes you somewhere warm. Somewhere safe. Somewhere good.</p>
          <p>And if one day everything changes — I still hope, somehow, you remember me a little. Not in a heavy way. Just enough to smile once, and think, <em>"oh right. that was nice."</em></p>
          <p>That would be enough.</p>
        </div>
        <button className="nb" onClick={onNext}>next <span className="ar">→</span></button>
      </div>
    </div>
  );
}
