import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-px bg-[var(--border-light)]" />
      <About />
      <div className="w-full h-px bg-[var(--border-light)]" />
      <Services />
      <div className="w-full h-px bg-[var(--border-light)]" />
      <Projects />
      <div className="w-full h-px bg-[var(--border-light)]" />
      <Contact />
      <div className="w-full h-px bg-[var(--border-light)]" />
      <Footer />
    </>
  )
}
