import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import './Header.css'

const WHATSAPP = 'https://wa.me/558589985368?text=Ol%C3%A1%2C%20Jo%C3%A3o%20Pedro%20Bind%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20acompanhamento%20nutricional.'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const nav = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`hdr ${scrolled ? 'hdr--solid' : ''} ${menuOpen ? 'hdr--menu-open' : ''}`}>
      <div className="hdr__inner wrap--wide">
        <a href="#" className="hdr__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="João Pedro Bindá" />
        </a>

        <nav className={`hdr__nav ${menuOpen ? 'hdr__nav--open' : ''}`}>
          <button onClick={() => nav('sobre')}>Sobre</button>
          <button onClick={() => nav('metodo')}>Método</button>
          <button onClick={() => nav('faq')}>FAQ</button>
          <button onClick={() => nav('contato')}>Contato</button>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cta cta--primary hdr__cta">
            Agendar
          </a>
        </nav>

        <button
          className={`hdr__menu ${menuOpen ? 'hdr__menu--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}
