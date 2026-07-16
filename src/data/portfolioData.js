// ============================================================================
// Semua data di portofolio ini diambil dari satu tempat: file ini.
// Ingin mengganti teks, menambah proyek, atau memperbarui kontak?
// Cukup edit nilai-nilai di bawah — tidak perlu menyentuh komponen React.
// ============================================================================

export const profile = {
  name: 'Made Artha Darma Putra',
  initials: 'MA',
  roles: [
    'Mahasiswa Informatika',
    'Fullstack Web Developer',
    'Mobile Developer',
    'Video Editor',
  ],
  location: 'Denpasar Timur, Bali',
  fullAddress: 'Jl. Meduri, Kec. Denpasar Timur, Kota Denpasar, Bali',
  email: 'darmaputra344@gmail.com',
  phoneDisplay: '+62 8573-9148-098',
  whatsappNumber: '6285739148098',
  bio: 'Mahasiswa Informatika Institut Bisnis dan Teknologi Indonesia yang berfokus pada software development, pengelolaan data, dan IT. Memiliki kemampuan beradaptasi yang baik untuk bekerja mandiri maupun berkolaborasi dalam tim, serta berkomitmen untuk terus belajar dan berkembang di industri teknologi.',
  cvFile: '/CV_Made_Artha_Darma_Putra.pdf',
}

// PENTING: Instagram & GitHub tidak tercantum di CV yang dikirim, jadi diisi
// placeholder di bawah. Ganti "USERNAME_INSTAGRAM" dan "USERNAME_GITHUB"
// dengan username asli sebelum online.
export const social = {
  email: `mailto:${profile.email}`,
  whatsapp: `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    'Halo Made Artha, saya melihat portofolio Anda dan ingin ngobrol lebih lanjut.'
  )}`,
  instagram: 'https://instagram.com/drmaputraa',
  github: 'https://github.com/darmap',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Proyek dibangun' },
  { value: 10, suffix: '+', label: 'Tools & bahasa' },
  { value: 3, suffix: '', label: 'Pengalaman non-akademik' },
]

export const skillGroups = [
  {
    label: 'Bahasa Pemrograman',
    tag: 'lang',
    items: ['PHP', 'Java', 'Python'],
  },
  {
    label: 'Framework & Basis Data',
    tag: 'stack',
    items: ['Laravel', 'MySQL', 'Firebase (Firestore)', 'HTML & CSS'],
  },
  {
    label: 'Kreatif & Editing',
    tag: 'creative',
    items: ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut'],
  },
]

export const projects = [
  {
    id: 'pos-warung-kopi',
    category: 'Proyek Kelompok',
    file: 'WarkitaWeb.php',
    title: 'Sistem POS Warung Kopi',
    description:
      'Aplikasi Point of Sale (POS) berbasis web untuk mendigitalisasi pencatatan transaksi secara real-time serta manajemen inventaris secara efisien.',
    stack: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    id: 'rental-kendaraan',
    category: 'Proyek Kelompok',
    file: 'RentalKendaraan.java',
    title: 'Sistem Manajemen Rental Kendaraan',
    description:
      'Aplikasi desktop untuk mengotomatisasi manajemen ketersediaan armada, pelacakan status sewa, dan kalkulasi biaya administrasi.',
    stack: ['Java', 'NetBeans', 'Desktop App'],
  },
  {
    id: 'portofolio-pribadi',
    category: 'Proyek Mandiri',
    file: 'Portfolio.jsx',
    title: 'Web Portofolio Pribadi',
    description:
      'Website portofolio interaktif dan responsif untuk menampilkan rekam jejak proyek dan keahlian profesional secara modern — situs yang sedang Anda lihat ini!',
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 'catatan-harian',
    category: 'Proyek Mandiri',
    file: 'DiaryApp.java',
    title: 'Aplikasi Catatan Harian',
    description:
      'Aplikasi mobile Android untuk pencatatan harian dengan sinkronisasi data cloud secara real-time menggunakan Firebase Firestore.',
    stack: ['Android', 'Java', 'Firebase'],
  },
]

// Track 01 pada linimasa — Pendidikan (tanggal pasti sesuai CV)
export const education = [
  { period: '2012–2018', title: 'SD Negeri 2 Sebatu', level: 'SD' },
  { period: '2018–2021', title: 'SMP Negeri Tegallalang', level: 'SMP' },
  { period: '2021–2024', title: 'SMA Negeri 1 Tegallalang', level: 'SMA' },
  {
    period: '2024–Sekarang',
    title: 'S1 Informatika, INSTIKI',
    level: 'S1',
    current: true,
  },
]

// Track 02 pada linimasa — Pengalaman non-akademik
export const experience = [
  {
    period: '2025 & 2026',
    title: 'Panitia KEBUS — UKM Tabuh',
    tag: 'ORGANISASI',
  },
  {
    period: null,
    title: 'Panitia Konser & Acara STT',
    tag: 'ORGANISASI',
  },
  {
    period: null,
    title: 'Freelance Video Editor',
    tag: 'FREELANCE',
    current: true,
  },
]
