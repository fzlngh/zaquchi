import { PhotoFrame } from '../components/PhotoFrame';

interface StoryPageProps {
  active: boolean;
  onNext: () => void;
}

const poem = `Tidak semua tumbuh
memilih riuh.

Sebagian menjelma akar—
menembus gelap,
memeluk luka tanah,
lalu diam-diam menguat.

Ia tak tepuk tangan,
tak sorot lampu,
tak nama yang dielu-elukan.

Hanya sunyi
yang setia menemaninya
menjadi kuat
tanpa perlu terlihat.

Bukankah yang paling kokoh
sering lahir dari
hal-hal yang tak disaksikan?

Badai datang
membawa gaduh di bahunya,
mengguncang dahan,
merontokkan yang rapuh.

Namun akar
tak pandai berteriak.

Ia hanya menggenggam bumi
lebih dalam.

Lelah kerap menjelma senja—
redup, panjang,
dan nyaris membuat pulang
terasa seperti kalah.

Tetapi langkah,
betapapun kecil,
tetaplah doa
yang sedang berjalan.

Barangkali
kau sedang menjadi akar—

ditanam dalam gelap
agar kelak
mampu menahan
badai yang lebih besar.

Dan bukankah
yang berakhir indah
bukan mereka
yang paling cepat berbunga,

melainkan mereka
yang paling sabar
bertumbuh
di dalam sunyi.`;

export function StoryPage({ active, onNext }: StoryPageProps) {
  return (
    <div className={`page sc ${active ? 'in' : ''}`} id="p-st">
      <div className="inn">
        <div className="disp">akar</div>
        <div className="eye">sebuah puisi</div>

        {/* Photo for "akar" section */}
        <PhotoFrame
          src="./photos/akar-photo.jpg"
          alt="akar"
          label="akar"
        />

        <div className="poem">{poem}</div>
        <button className="nb" onClick={onNext}>next <span className="ar">→</span></button>
      </div>
    </div>
  );
}
