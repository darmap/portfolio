import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Jika deploy ke GitHub Pages sebagai project site
  // (https://username.github.io/nama-repo/), ubah base di bawah
  // menjadi '/nama-repo/'. Untuk Vercel/Netlify, biarkan '/'.
  base: '/',
})
