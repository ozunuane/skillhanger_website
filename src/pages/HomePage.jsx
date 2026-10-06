import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Work from '../sections/Work'
import AI from '../sections/AI'
import Growth from '../sections/Growth'
import Training from '../sections/Training'
import Testimonials from '../sections/Testimonials'
import About from '../sections/About'
import CTA from '../sections/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Work />
        <AI />
        <Growth />
        <Training />
        <Testimonials />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
