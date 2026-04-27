import imgBw from '../assets/jp-bw.jpg'
import './Transform.css'

const items = [
  {
    title: 'Composição corporal direcionada',
    text: 'Emagrecimento inteligente ou ganho de massa com protocolo preciso e acompanhamento de bioimpedância.',
  },
  {
    title: 'Performance real no treino',
    text: 'Periodização nutricional alinhada ao seu programa de treinamento, com foco em rendimento e recuperação.',
  },
  {
    title: 'Saúde metabólica e exames em dia',
    text: 'Melhora consistente de marcadores como glicemia, colesterol, triglicerídeos e inflamação.',
  },
  {
    title: 'Rotina alimentar sem sofrimento',
    text: 'Um plano que cabe na sua vida — com flexibilidade, prazer e autonomia nas escolhas.',
  },
  {
    title: 'Energia, foco e disposição',
    text: 'Alimentação que sustenta seu dia inteiro — do treino ao trabalho, sem picos e quedas.',
  },
  {
    title: 'Relação saudável com a comida',
    text: 'Sem culpa, sem neura. Aprender a comer bem com consciência é parte fundamental do processo.',
  },
]

export default function Transform() {
  return (
    <section className="transform">
      {/* Editorial image band */}
      <div className="transform__visual reveal">
        <img src={imgBw} alt="João Pedro Bindá" />
        <div className="transform__visual-overlay" />
        <div className="transform__visual-text">
          <span className="label" style={{ color: 'rgba(255,255,255,0.4)' }}>Resultado</span>
        </div>
      </div>

      {/* Content */}
      <div className="transform__content">
        <div className="wrap">
          <div className="transform__header">
            <h2 className="transform__title reveal">
              O que muda com um<br />
              acompanhamento estratégico.
            </h2>
          </div>
          <div className="transform__grid">
            {items.map((item, i) => (
              <div key={i} className="transform__item reveal">
                <div className="transform__item-index">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="transform__item-title">{item.title}</h3>
                  <p className="transform__item-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
