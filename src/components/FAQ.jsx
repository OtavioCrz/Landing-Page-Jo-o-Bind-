import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Como funciona a primeira consulta?',
    a: 'Realizamos uma avaliação completa: histórico de saúde, rotina, preferências alimentares, objetivos e análise de exames. A partir disso, construímos juntos seu plano personalizado.',
  },
  {
    q: 'O atendimento é online ou presencial?',
    a: 'Ambos. O atendimento online funciona por videochamada com a mesma qualidade e atenção. Você escolhe o formato que melhor se encaixa na sua rotina.',
  },
  {
    q: 'Com que frequência são os retornos?',
    a: 'Geralmente a cada 3 a 4 semanas, dependendo do momento e objetivo. Entre consultas, mantenho suporte ativo para dúvidas e ajustes rápidos.',
  },
  {
    q: 'Preciso seguir dieta restritiva?',
    a: 'Não. A abordagem é baseada em flexibilidade e praticidade. Você aprende a fazer escolhas inteligentes sem abrir mão do prazer de comer bem.',
  },
  {
    q: 'Atende condições de saúde específicas?',
    a: 'Sim. Trabalho com diabetes, hipertensão, alterações de colesterol, problemas gastrointestinais, entre outros — sempre em alinhamento com o médico responsável.',
  },
  {
    q: 'Qual o investimento?',
    a: 'Os valores variam conforme o tipo de acompanhamento. Entre em contato pelo WhatsApp para que eu possa entender seu caso e apresentar as opções.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="faq__layout">
          <div className="faq__left">
            <span className="label reveal">FAQ</span>
            <h2 className="faq__title reveal">
              Perguntas<br />frequentes
            </h2>
          </div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq__item reveal ${open === i ? 'faq__item--open' : ''}`}
              >
                <button
                  className="faq__question"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq__icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1"/>
                      <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="1" className="faq__icon-v"/>
                    </svg>
                  </span>
                </button>
                <div className="faq__answer">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
