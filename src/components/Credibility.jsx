import './Credibility.css'

const testimonials = [
  {
    text: 'O João Pedro mudou minha forma de enxergar alimentação. Sem neura, sem dieta maluca. Resultados reais, de verdade.',
    name: 'Ana Carolina M.',
    detail: 'Empresária, 32 anos',
  },
  {
    text: 'Meu rendimento no treino melhorou em semanas. O acompanhamento próximo faz toda a diferença — ele responde rápido e ajusta quando preciso.',
    name: 'Ricardo S.',
    detail: 'Atleta amador, 28 anos',
  },
  {
    text: 'Depois de anos tentando sozinha, finalmente entendi que precisa de método. Meus exames nunca estiveram tão bons.',
    name: 'Juliana F.',
    detail: 'Professora, 41 anos',
  },
]

export default function Credibility() {
  return (
    <section className="cred">
      <div className="wrap">
        <div className="cred__header">
          <div className="cred__header-label">
            <span className="label reveal">Credibilidade</span>
            <div className="divider reveal" style={{ marginTop: 20 }} />
          </div>
          <h2 className="cred__title reveal">
            Quem confia, recomenda.
          </h2>
        </div>

        <div className="cred__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="cred__card reveal">
              <p className="cred__quote">{t.text}</p>
              <div className="cred__author">
                <span className="cred__name">{t.name}</span>
                <span className="cred__detail">{t.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cred__bottom reveal">
          <div className="cred__badges">
            <div className="cred__badge">
              <span className="cred__badge-label">CRN Ativo</span>
            </div>
            <div className="cred__badge">
              <span className="cred__badge-label">Nutrição Clínica</span>
            </div>
            <div className="cred__badge">
              <span className="cred__badge-label">Nutrição Esportiva</span>
            </div>
            <div className="cred__badge">
              <span className="cred__badge-label">Atendimento Online e Presencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
