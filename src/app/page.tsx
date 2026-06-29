import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Valores from '@/components/Valores'
import Adorar from '@/components/Adorar'
import Services from '@/components/Services'
import Visit from '@/components/Visit'
import Baptism from '@/components/Baptism'
import Connect from '@/components/Connect'
import Contribute from '@/components/Contribute'
import Location from '@/components/Location'
import Newsletter from '@/components/Newsletter'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal delay={0.1}><Valores /></ScrollReveal>
      <ScrollReveal delay={0.1}><Adorar /></ScrollReveal>
      <ScrollReveal delay={0.1}><Services /></ScrollReveal>
      <ScrollReveal delay={0.2}><Visit /></ScrollReveal>
      <ScrollReveal delay={0.1}><Baptism /></ScrollReveal>
      <ScrollReveal delay={0.2}><Connect /></ScrollReveal>
      <ScrollReveal delay={0.1}><Contribute /></ScrollReveal>
      <ScrollReveal delay={0.2}><Location /></ScrollReveal>
      <ScrollReveal delay={0.1}><Newsletter /></ScrollReveal>
      <ScrollReveal delay={0.1}><CTA /></ScrollReveal>
      <Footer />
    </>
  )
}
