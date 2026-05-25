# Zaquchi — Pastel Blue

Website personal sebagai hadiah kecil untuk Zahira.

---

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Development (live preview)
npm run dev

# Build untuk production
npm run build
```

Setelah build, buka `dist/index.html` di browser.

---

## 📁 Struktur File

```
zaquchi-pastel-blue/
│
├── public/                        ← File statis (otomatis masuk dist/ saat build)
│   ├── Blessed.mp3                ← File musik (Daniel Caesar - Blessed)
│   └── photos/                    ← Semua foto
│       ├── music-photo.jpg        ← Foto di halaman musik ("do you remember this?")
│       ├── akar-photo.jpg         ← Foto di halaman puisi ("akar")
│       ├── graduation-photo.jpg   ← Foto di halaman kelulusan ("you made it.")
│       ├── zaquchi-photo.jpg      ← Foto di halaman ending ("Zaquchi")
│       ├── bread.jpg              ← Foto di memory card: roti 🍞
│       ├── secret1.jpg            ← Foto rahasia #1
│       ├── secret2.jpg            ← Foto rahasia #2
│       ├── secret3.jpg            ← Foto rahasia #3
│       ├── secret4.jpg            ← Foto rahasia #4
│       ├── secret5.jpg            ← Foto rahasia #5
│       ├── secret6.jpg            ← Foto rahasia #6
│       ├── secret7.jpg            ← Foto rahasia #7
│       ├── secret8.jpg            ← Foto rahasia #8
│       ├── secret9.jpg            ← Foto rahasia #9
│       └── secret10.jpg           ← Foto rahasia #10
│
├── src/
│   ├── components/
│   │   ├── GameModal.tsx          ← Modal mini-games
│   │   ├── MemoryModal.tsx        ← Modal kenangan
│   │   ├── Nav.tsx                ← Navigasi (back, dots, star)
│   │   ├── PhotoFrame.tsx         ← Komponen frame foto
│   │   ├── SecretOverlay.tsx      ← Overlay secret (bintang ✦)
│   │   └── Starfield.tsx          ← Animasi bintang latar
│   │
│   ├── data/
│   │   └── content.ts             ← Semua teks, soal game, lirik, dll
│   │
│   ├── pages/
│   │   ├── IntroPage.tsx          ← Halaman 1: "hi zahira"
│   │   ├── QuestionPage.tsx       ← Halaman 2: "kamu sayang aku gak?"
│   │   ├── PasswordPage.tsx       ← Halaman 3: password ("liar")
│   │   ├── ProfilePage.tsx        ← Halaman 4: profil & deskripsi
│   │   ├── MemoriesPage.tsx       ← Halaman 5: grid kenangan
│   │   ├── MusicPage.tsx          ← Halaman 6: lagu Blessed
│   │   ├── GamesPage.tsx          ← Halaman 7: mini-games
│   │   ├── StoryPage.tsx          ← Halaman 8: puisi "akar"
│   │   ├── GraduationPage.tsx     ← Halaman 9: ucapan kelulusan
│   │   ├── FuturePage.tsx         ← Halaman 10: "for your later days"
│   │   ├── ThankYouPage.tsx       ← Halaman 11: terima kasih
│   │   ├── ImpressionPage.tsx     ← Halaman 12: kesan pertama + Q&A
│   │   └── EndingPage.tsx         ← Halaman 13: ending "Zaquchi"
│   │
│   ├── styles/
│   │   └── globals.css            ← Semua styling & animasi glassmorphism
│   │
│   ├── App.tsx                    ← Root app, routing antar halaman
│   └── main.tsx                   ← Entry point React
│
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🖼️ Panduan Foto

Semua foto ditaruh di folder **`public/photos/`** — bukan di `dist/photos/`.

| File | Dipakai di | Keterangan |
|------|-----------|------------|
| `music-photo.jpg` | Halaman Musik | Foto yang relate sama lagu Blessed |
| `akar-photo.jpg` | Halaman Puisi | Foto untuk puisi "akar" |
| `graduation-photo.jpg` | Halaman Kelulusan | Foto wisuda / kelulusan SMP |
| `zaquchi-photo.jpg` | Halaman Ending | Foto utama / favorit |
| `bread.jpg` | Memory: roti | Foto yang relate sama cerita roti |
| `secret1.jpg` — `secret10.jpg` | Secret Overlay ✦ | 10 foto yang muncul berurutan di halaman rahasia |

> **Tips:** Format `.jpg` atau `.png` sama-sama oke. Ukuran foto idealnya tidak lebih dari 1MB per file agar loading cepat.

---

## 🎵 File Musik

Taruh file musik di **`public/Blessed.mp3`**.

> Pastikan nama filenya persis `Blessed.mp3` (huruf kapital B).

---

## 🔑 Password

Password untuk membuka website: **`liar`**

---

## ✦ Secret

Klik ikon bintang berputar di pojok kanan atas untuk membuka halaman rahasia.
