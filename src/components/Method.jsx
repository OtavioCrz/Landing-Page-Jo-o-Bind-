import imgPerfil from '../assets/jp-perfil.jpg'
import imgComputador from '../assets/jp-computador.jpg'
import './Method.css'

const steps = [
  {
    num: '01',
    title: 'Avaliação individualizada',
    text: 'Análise completa do seu histórico, exames, composição corporal e rotina. Entender o ponto de partida é o que permite criar um caminho preciso.',
  },
  {
    num: '02',
    title: 'Plano estratégico',
    text: 'Construção de um protocolo alimentar personalizado — prático, flexível e alinhado aos seus objetivos reais.',
  },
  {
    num: '03',
    title: 'Acompanhamento contínuo',
    text: 'Suporte ativo entre consultas, ajustes periódicos e monitoramento de evolução com dados reais.',
  },
  {
    num: '04',
    title: 'Resultado sustentável',
    text: 'O foco é construir constância. Resultados que não dependem de restrição extrema e que se mantêm no longo prazo.',
  },
]

export default function Method() {
  return (
    <section className="method" id="metodo">
      {/* Top — image side-by-side with intro */}
      <div className="method__hero">
        <div className="method__hero-img reveal">
          <img src={imgPerfil} alt="Avaliação clínica" />
        </div>
        <div className="method__hero-content">
          <div className="wrap">
            <div className="method__hero-inner">
              <span className="label reveal">Método</span>
              <h2 className="method__title reveal">
                Um processo claro,<br />
                do início ao resultado.
              </h2>
              <p className="text-lg reveal" style={{ color: 'var(--gray)', maxWidth: 480 }}>
                Cada etapa do acompanhamento é desenhada para entregar
                clareza, confiança e evolução real.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Steps — vertical list on left + image on right */}
      <div className="method__steps">
        <div className="wrap">
          <div className="method__steps-layout">
            <div className="method__steps-list">
              {steps.map((s, i) => (
                <div key={i} className="method__step reveal">
                  <span className="method__step-num">{s.num}</span>
                  <div className="method__step-body">
                    <h3 className="method__step-title">{s.title}</h3>
                    <p className="method__step-text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="method__steps-image reveal">
              <img src={imgComputador} alt="Acompanhamento profissional" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
