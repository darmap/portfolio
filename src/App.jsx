import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    window.localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  return (
    <div className="min-h-screen">
      <Navbar isLight={isLight} onToggleTheme={() => setIsLight((v) => !v)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
