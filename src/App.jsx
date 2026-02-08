import SmoothScroll from './components/SmoothScroll'
import GrainOverlay from './components/GrainOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import UpCore from './components/UpCore'
import Services from './components/Services'
import International from './components/International'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <SmoothScroll>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <UpCore />
        <Services />
        <International />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
