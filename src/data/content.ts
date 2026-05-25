export const QD = [
  { q: 'what color does you like most?', o: ['red','blue','yellow','pink'], c: 'blue', fc: 'okay good, at least i pay attention', fw: 'wrong?. i do better.' },
  { q: 'what game is basically attached to you?', o: ['valorant','roblox','genshin','minecraft'], c: 'roblox', fc: 'yep. i know that one.', fw: 'nope?. i think again.' },
  { q: 'what does you like more?', o: ['running','sleeping','gaming','cooking'], c: 'running', fc: "see, i do know things.", fw: "ini susah sih, ak tak taw sowwy." }
];

export const GD = [
  { cl: 'something simple, but i still think it should\'ve been with you', o: ['bread','music','running'], c: 'bread', fc: 'yeah. still remember that one.', fw: 'nope. but nice try.' },
  { cl: 'the one that changed the way i see things', o: ['rose','chocolate','roblox'], c: 'rose', fc: 'exactly that one.', fw: 'jawabannya udah pasti ga sihh' },
  { cl: "wasn't about what it was, but who gave it", o: ['music','chocolate','bread'], c: 'chocolate', fc: 'kind of annoying, but okay.', fw: 'guess again next time, ga memperhatikan sih' }
];

export const TD = [
  { a: 'rose', b: 'jennie', fa: 'yeah, that feels right.', fb: 'yh tw si.' },
  { a: 'night', b: 'morning', fa: 'same.', fb: 'morning person? so iya bangett.' },
  { a: 'roblox', b: 'mobile legends', fa: "okay that's good.", fb: "we're playing this next, remember?" },
  { a: 'blue', b: 'black', fa: 'yeah, that feels right.', fb: 'dark. noted.' },
  { a: 'quiet', b: 'chaotic', fa: 'makes sense.', fb: 'aku pikir bakal milih yang ono.' }
];

export const RD = [
  { q: 'what do i think about too much?', o: ['sleep','school','nothing'], f: 'correct. somehow still nothing.' },
  { q: 'what ruins my focus fastest?', o: ['noise','overthinking','nothing again'], f: 'all roads lead to the same answer.' },
  { q: 'what do i randomly bring up to my friends?', o: ['homework','food','you, apparently'], f: 'yeah. apparently.' }
];

export const TPLS = [
  'tap to count','that was fast','okay this is getting obvious','hm.','again?',
  'you\'re kind of everywhere','still going?','okay.','noted.','can\'t stop huh',
  'same honestly','yeah alright','this is concerning','but also relatable',
  'i\'ll stop judging','nope still judging','this is a lot','genuinely a lot',
  'just saying','yeah alright i get it','same tbh'
];

export const QNA = [
  { q: 'did i get you right at first?', fy: 'boonk ah.', fn: "yeah, i figured you'd say that." },
  { q: 'are you easier to understand than you seem?', fy: 'maybe.', fn: 'i know. still trying.' },
  { q: "do you know you're hard not to notice?", fy: 'of course you do.', fn: 'you should.' },
  { q: 'were you always this easy to remember?', fy: 'yeah. that checks out.', fn: 'then why do i still remember everything.' },
  { q: 'do you realize people notice more than you think?', fy: 'good. then you know.', fn: 'they do. i do.' }
];

export const MD: Record<string, { e: string; t: string; c: string; photo?: string }> = {
  bread: {
    e: '🍞', t: 'bread',
    c: `This is actually such a small thing, but I still remember it.\n\nBack then, I wanted to celebrate my birthday in a simple way. Nothing big, nothing loud. I just wanted to hand out bread to people who needed it. That was it.\n\nAnd honestly, the first person I wanted to ask was you. It just felt like it would've been nice walking around and handing out bread with you. Simple, but probably one of those memories I would've kept for a long time.\n\nBut in the end, I didn't ask you. Not because I didn't want to. Honestly, it was because I wanted to too much.\n\nI was scared it would make you feel like you had to celebrate me, when that was never what I meant. So I asked someone else instead.\n\nIt still happened. But yeah… there's still a small part of me that thinks, "it should've been with you."`,
  },
  rose: {
    e: '🌹', t: 'rose',
    c: `I actually liked Rose a long time ago. But it was just a casual kind of liking. Nothing serious.\n\nThen you came around, and somehow made me like her again. But this time, it felt different. I started understanding why people liked her so much.\n\nAnd weirdly, it wasn't just about Rose. Somehow, because of you, the way I looked at other things started changing too. Things that used to feel ordinary started feeling more interesting.\n\nSo yeah… you didn't just make me like Rose again, you kind of changed the way I see things too.`
  },
  chocolate: {
    e: '🍫', t: 'chocolate',
    c: `I like chocolate.\n\nBut obviously, it feels different when I buy it myself. What made it special was the fact that it came from you. That's really it.\n\nAnd honestly, even if it wasn't chocolate, I probably still would've kept it carefully anyway. Because the point was never the thing itself. It was the fact that you gave it to me.\n\nSo yeah, whether it was chocolate, candy, paper, or literally anything else… it still would've felt special. Kind of annoying, but okay.`
  },
  running: {
    e: '🏃', t: 'running',
    c: `I don't know why, but every time I see someone running, I think of you. Probably because you always made it very clear just how much you liked it.`
  },
  music: {
    e: '🎧', t: 'music',
    c: `There are songs that are way more fun to listen to now, even though they used to feel normal to me.\n\nMostly because I like listening to our playlist, and now those songs always remind me of you.`
  },
  roblox: {
    e: '🎮', t: 'roblox',
    c: `This game is fun, honestly. The one game that somehow became a connection.\n\nBack then it was Free Fire too, yeah. And somehow I was a burden in both.\n\nThat's why we're playing ML next, okay? We'll play together. I promise I won't be a burden this time.`
  }
};

export const NEB: Record<string, string> = {
  'p-intro':  'radial-gradient(ellipse at 70% 25%, rgba(160,200,255,0.35) 0%,transparent 58%),radial-gradient(ellipse at 20% 80%, rgba(140,185,255,0.25) 0%,transparent 52%)',
  'p-q':      'radial-gradient(ellipse at 50% 35%, rgba(130,175,255,0.4) 0%,transparent 55%),radial-gradient(ellipse at 80% 75%, rgba(160,200,255,0.2) 0%,transparent 50%)',
  'p-pw':     'radial-gradient(ellipse at 30% 45%, rgba(140,185,255,0.35) 0%,transparent 55%),radial-gradient(ellipse at 70% 65%, rgba(120,165,255,0.2) 0%,transparent 50%)',
  'p-pro':    'radial-gradient(ellipse at 60% 30%, rgba(160,210,255,0.4) 0%,transparent 55%),radial-gradient(ellipse at 20% 70%, rgba(130,180,255,0.25) 0%,transparent 50%)',
  'p-mem':    'radial-gradient(ellipse at 50% 40%, rgba(145,195,255,0.38) 0%,transparent 55%),radial-gradient(ellipse at 80% 20%, rgba(170,215,255,0.22) 0%,transparent 50%)',
  'p-mus':    'radial-gradient(ellipse at 30% 50%, rgba(120,175,255,0.42) 0%,transparent 55%),radial-gradient(ellipse at 70% 20%, rgba(150,200,255,0.28) 0%,transparent 50%)',
  'p-gm':     'radial-gradient(ellipse at 60% 60%, rgba(160,205,255,0.38) 0%,transparent 55%),radial-gradient(ellipse at 20% 30%, rgba(135,185,255,0.22) 0%,transparent 50%)',
  'p-st':     'radial-gradient(ellipse at 40% 30%, rgba(145,195,255,0.35) 0%,transparent 55%),radial-gradient(ellipse at 70% 70%, rgba(170,215,255,0.22) 0%,transparent 50%)',
  'p-grad':   'radial-gradient(ellipse at 50% 40%, rgba(160,210,255,0.4) 0%,transparent 55%),radial-gradient(ellipse at 20% 20%, rgba(140,190,255,0.25) 0%,transparent 50%)',
  'p-fut':    'radial-gradient(ellipse at 60% 50%, rgba(130,185,255,0.42) 0%,transparent 55%),radial-gradient(ellipse at 30% 20%, rgba(155,205,255,0.28) 0%,transparent 50%)',
  'p-ty':     'radial-gradient(ellipse at 40% 40%, rgba(145,195,255,0.38) 0%,transparent 55%),radial-gradient(ellipse at 70% 70%, rgba(165,210,255,0.22) 0%,transparent 50%)',
  'p-imp':    'radial-gradient(ellipse at 60% 30%, rgba(155,205,255,0.38) 0%,transparent 55%),radial-gradient(ellipse at 20% 70%, rgba(135,185,255,0.22) 0%,transparent 50%)',
  'p-end':    'radial-gradient(ellipse at 50% 50%, rgba(140,195,255,0.5) 0%,transparent 60%),radial-gradient(ellipse at 80% 10%, rgba(160,215,255,0.28) 0%,transparent 50%)',
};

export const PAGES = ['p-intro','p-q','p-pw','p-pro','p-mem','p-mus','p-gm','p-st','p-grad','p-fut','p-ty','p-imp','p-end'];
export const DOT_FROM = 3;
