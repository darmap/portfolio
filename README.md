# Portofolio — Made Artha Darma Putra

Website portofolio pribadi, dibangun dengan **React + Vite + Tailwind CSS v4**.
Desainnya mengambil metafora *timeline editing video* (garis waktu dengan
track & clip) karena kamu punya dua sisi: developer dan video editor.

## Menjalankan di komputer sendiri

Butuh [Node.js](https://nodejs.org) versi 18 ke atas.

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Untuk build versi produksi:

```bash
npm run build
npm run preview   # opsional, untuk mengecek hasil build
```

## Struktur folder

```
src/
├── data/portfolioData.js   ← SEMUA teks & data ada di sini
├── components/              ← satu file per bagian halaman
├── hooks/                   ← animasi scroll & nav aktif
├── App.jsx                  ← menyusun urutan section
└── index.css                 ← warna, font, dan animasi
```

## Mengubah konten

Hampir semua teks (nama, bio, skill, proyek, pendidikan, pengalaman, kontak)
ada di **`src/data/portfolioData.js`**. Edit file itu saja untuk memperbarui
isi web tanpa perlu menyentuh komponen React.

### ⚠️ Perlu kamu lengkapi

CV yang dikirim tidak mencantumkan username Instagram dan GitHub, jadi di
`portfolioData.js` masih ada placeholder:

```js
instagram: 'https://instagram.com/USERNAME_INSTAGRAM',
github: 'https://github.com/USERNAME_GITHUB',
```

Ganti `USERNAME_INSTAGRAM` dan `USERNAME_GITHUB` dengan akun asli kamu.

### Kontak yang sudah langsung berfungsi

- **Email** — tombol/link membuka `mailto:darmaputra344@gmail.com`.
- **WhatsApp** — tombol mengambang di kanan bawah dan link di bagian Kontak
  membuka `wa.me` dengan nomor `+62 8573-9148-098` dan pesan pembuka otomatis.
- **Form pesan** di bagian Kontak tidak memakai server/backend — saat
  dikirim, form ini membuka aplikasi email kamu dengan subjek & isi pesan
  yang sudah terisi otomatis (bukan notifikasi "terkirim" palsu).

### CV & foto profil

- `public/CV_Made_Artha_Darma_Putra.pdf` — file yang diunduh lewat tombol
  "Unduh CV". Ganti file ini kapan pun CV-mu diperbarui (nama file boleh
  sama).
- `src/assets/profile.jpg` — foto profil, diambil dari foto di CV yang kamu
  kirim.

## Fitur interaktif yang sudah ada

- Mode gelap/terang (tersimpan otomatis di browser)
- Navigasi dengan highlight section aktif + menu mobile
- Efek mengetik bergantian pada peran ("Fullstack Web Developer",
  "Mobile Developer", dst.)
- Animasi *scroll-reveal* saat elemen masuk ke layar
- Linimasa (timeline) dua track — Pendidikan & Pengalaman — yang bisa
  digeser secara horizontal, gaya timeline video editor
- Tombol WhatsApp mengambang
- Statistik dengan animasi hitung naik

## Deploy

**Vercel / Netlify:** hubungkan repo, build command `npm run build`, output
folder `dist`. Tidak perlu ubah apa pun di `vite.config.js`.

**GitHub Pages:** tambahkan `"homepage"` di `package.json`, install `gh-pages`
(`npm i -D gh-pages`), lalu di `vite.config.js` ubah:

```js
base: '/nama-repo-kamu/',
```

Lalu jalankan:

```bash
npm run build
npx gh-pages -d dist
```
