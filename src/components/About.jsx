import './About.css'

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__content">
        <div className="wrap">
          <div className="about__grid">
            <div className="about__col-label">
              <span className="label reveal">Sobre</span>
              <div className="divider reveal" style={{ marginTop: 20 }} />
            </div>
            <div className="about__col-text">
              <h2 className="about__title reveal">
                João Pedro Bindá
              </h2>
              <p className="about__lead text-lg reveal">
                Nutricionista com formação sólida em nutrição clínica, esportiva e estética.
                Atua com um método próprio que une ciência, escuta ativa e estratégia prática
                para construir resultados reais.
              </p>
              <div className="about__body reveal">
                <p>
                  Cada paciente é um caso único. O que diferencia um acompanhamento
                  genérico de um acompanhamento de verdade é a atenção ao detalhe:
                  sua rotina, seus exames, seus limites, sua evolução.
                </p>
                <p>
                  Não trabalho com promessas — trabalho com processo. Constância,
                  ajustes precisos e presença em cada etapa. É assim que resultado
                  deixa de ser temporário e passa a ser sustentável.
                </p>
              </div>
              <div className="about__facts reveal">
                <div className="about__fact">
                  <span className="about__fact-number">500+</span>
                  <span className="about__fact-label">Pacientes<br/>acompanhados</span>
                </div>
                <div className="about__fact">
                  <span className="about__fact-number">5+</span>
                  <span className="about__fact-label">Anos de<br/>experiência</span>
                </div>
                <div className="about__fact">
                  <span className="about__fact-number">98%</span>
                  <span className="about__fact-label">Índice de<br/>satisfação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
