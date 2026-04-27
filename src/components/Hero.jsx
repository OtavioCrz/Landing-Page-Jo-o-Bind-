import heroImg from '../assets/jp-frente.jpg'
import './Hero.css'

const WHATSAPP = 'https://wa.me/558589985368?text=Ol%C3%A1%2C%20Jo%C3%A3o%20Pedro%20Bind%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20acompanhamento%20nutricional.'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <img src={heroImg} alt="João Pedro Bindá" className="hero__img" />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__center">
          <div className="hero__intro hero--hidden">
            <span className="hero__tag">Nutricionista Clínico e Esportivo</span>
            <div className="hero__tag-line" />
          </div>

          <div className="hero__headline">
            <h1>
              <span className="hero__line hero--hidden">Nutrição</span>
              <span className="hero__line hero--hidden">personalizada com</span>
              <span className="hero__line hero__line--accent hero--hidden">estratégia e resultado.</span>
            </h1>
          </div>

          <div className="hero__desc hero--hidden">
            <p>
              João Pedro Bindá conduz um acompanhamento nutricional individualizado
              para quem busca saúde, estética e performance com clareza, constância e direção.
            </p>
          </div>

          <div className="hero__actions hero--hidden">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cta cta--white">
              Agendar consulta
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
            <button className="cta cta--ghost hero__ghost" onClick={() => document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' })}>
              Conheça o método
            </button>
          </div>
        </div>

      </div>

      <div className="hero__side hero--hidden">
        <span>João Pedro Bindá</span>
      </div>

      <div className="hero__scroll hero--hidden">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
