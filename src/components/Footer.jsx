import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft__top">
          <div className="ft__brand">
            <img src={logo} alt="João Pedro Bindá" className="ft__logo" />
          </div>
          <div className="ft__links">
            <a href="https://www.instagram.com/joaobindanutri/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/558589985368" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="ft__bottom">
          <span className="ft__copy">
            &copy; {new Date().getFullYear()} João Pedro Bindá. Todos os direitos reservados.
          </span>
          <span className="ft__credit">
            Desenvolvido por{' '}
            <a href="https://otaviocruz.com.br" target="_blank" rel="noopener noreferrer">
              Otávio Cruz
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
