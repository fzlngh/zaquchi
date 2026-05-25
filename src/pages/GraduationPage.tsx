import { PhotoFrame } from '../components/PhotoFrame';

interface GraduationPageProps {
  active: boolean;
  onNext: () => void;
}

export function GraduationPage({ active, onNext }: GraduationPageProps) {
  return (
    <div className={`page sc ${active ? 'in' : ''}`} id="p-grad">
      <div className="inn">
        <div className="disp">you made it.</div>
        <div className="eye">congratulations on graduating from smpn 282</div>
        <div className="div-line" />

        {/* Photo for "you made it" section */}
        <PhotoFrame
          src="./photos/graduation-photo.jpg"
          alt="graduation"
          label="graduation"
        />

        <div className="prose">
          <p>You made it. After everything the long days, the pressure, the tiredness, the things people saw, and the things they probably didn't you still made it here. And I hope you know that's something to be proud of.</p>
          <p>Not just because you finished middle school, but because of everything it took to get here. Because growing up is not always easy. And still, somehow, you kept going.</p>
          <p>So yes, I'm proud of you. Really proud. Proud of how far you've come. Proud of how much you've grown. Proud of the person you're becoming.</p>
          <p>And maybe this is only one ending, but it's also the start of something bigger. A new place. New people. New stories waiting for you.</p>
          <p>I hope the next place welcomes you kindly. I hope you get into the high school you've been hoping for. I hope what comes next is good to you.</p>
          <p>May what's ahead be kind. May your days be lighter. May your efforts be rewarded. May your heart stay soft. And may good things find you, again and again.</p>
        </div>
        <button className="nb" onClick={onNext}>next <span className="ar">→</span></button>
      </div>
    </div>
  );
}
