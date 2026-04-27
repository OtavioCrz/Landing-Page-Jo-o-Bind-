import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import About from './components/About'
import Method from './components/Method'
import Transform from './components/Transform'
import Credibility from './components/Credibility'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import useAnimations from './hooks/useAnimations'

function App() {
  useAnimations()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Method />
        <Transform />
        <Credibility />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}

export default App
