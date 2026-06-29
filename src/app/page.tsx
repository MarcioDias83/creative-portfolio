import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Ministries from '@/components/Ministries'
import Visit from '@/components/Visit'
import Location from '@/components/Location'
import CTA from '@/components/CTA'
import Baptism from '@/components/Baptism'
import Contribute from '@/components/Contribute'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal delay={0.1}><Services /></ScrollReveal>
      <ScrollReveal delay={0.2}><Visit /></ScrollReveal>
      <ScrollReveal delay={0.1}><Baptism /></ScrollReveal>
      <ScrollReveal delay={0.2}><Ministries /></ScrollReveal>
      <ScrollReveal delay={0.1}><Contribute /></ScrollReveal>
      <ScrollReveal delay={0.2}><Location /></ScrollReveal>
      <ScrollReveal delay={0.1}><CTA /></ScrollReveal>
      <Footer />
    </>
  )
}
