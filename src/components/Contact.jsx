import { useState } from 'react'
import './Contact.css'

const WHATSAPP = 'https://wa.me/558589985368'

const HOURS = [
  { day: 'Segunda-feira', time: '08:00 – 18:00' },
  { day: 'Terça-feira', time: '08:00 – 18:00' },
  { day: 'Quarta-feira', time: '08:00 – 18:00' },
  { day: 'Quinta-feira', time: '08:00 – 18:00' },
  { day: 'Sexta-feira', time: '08:00 – 17:00' },
  { day: 'Sábado', time: 'Fechado' },
  { day: 'Domingo', time: 'Fechado' },
]

export default function Contact() {
  const [form, setForm] = useState({ nome: '', telefone: '', objetivo: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá, João Pedro Bindá! Vim pelo site e gostaria de saber mais sobre seu acompanhamento nutricional.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nObjetivo: ${form.objetivo}\nMensagem: ${form.mensagem}`
    )
    window.open(`${WHATSAPP}?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact" id="contato">
      <div className="wrap">
        <div className="contact__layout">
          <div className="contact__left">
            <span className="label reveal" style={{ color: 'rgba(255,255,255,0.35)' }}>Contato</span>
            <h2 className="contact__title reveal">
              O próximo passo é seu.
            </h2>
            <p className="contact__sub reveal">
              Agende sua consulta ou envie uma mensagem.
              O acompanhamento começa no momento em que você decide.
            </p>

            <div className="contact__channels reveal">
              <a href={`${WHATSAPP}?text=${encodeURIComponent('Olá, João Pedro Bindá! Vim pelo site e gostaria de saber mais sobre seu acompanhamento nutricional.')}`} target="_blank" rel="noopener noreferrer" className="contact__channel">
                <span className="contact__channel-name">WhatsApp</span>
                <span className="contact__channel-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </span>
              </a>
              <a href="https://www.instagram.com/joaobindanutri/" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <span className="contact__channel-name">Instagram</span>
                <span className="contact__channel-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="contact__form-card reveal">
            <div className="contact__form-header">
              <span className="label">Formulário</span>
              <h3 className="contact__form-title">Solicite seu atendimento</h3>
              <p className="contact__form-sub">
                Preencha os dados abaixo e receba retorno direto no WhatsApp.
              </p>
            </div>
            <form className="contact__form" onSubmit={submit}>
              <div className="contact__field">
                <label htmlFor="c-nome">Nome</label>
                <input type="text" id="c-nome" name="nome" value={form.nome} onChange={handle} required placeholder="Seu nome completo" />
              </div>
              <div className="contact__field">
                <label htmlFor="c-tel">Telefone</label>
                <input type="tel" id="c-tel" name="telefone" value={form.telefone} onChange={handle} required placeholder="(00) 00000-0000" />
              </div>
              <div className="contact__field">
                <label htmlFor="c-obj">Objetivo</label>
                <select id="c-obj" name="objetivo" value={form.objetivo} onChange={handle} required>
                  <option value="">Selecione seu objetivo</option>
                  <option value="Emagrecimento">Emagrecimento</option>
                  <option value="Ganho de massa">Ganho de massa</option>
                  <option value="Saúde e qualidade de vida">Saúde e qualidade de vida</option>
                  <option value="Performance esportiva">Performance esportiva</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="contact__field">
                <label htmlFor="c-msg">Mensagem <span style={{ fontWeight: 400, color: 'var(--gray)' }}>(opcional)</span></label>
                <textarea id="c-msg" name="mensagem" value={form.mensagem} onChange={handle} rows="3" placeholder="Conte um pouco sobre você..." />
              </div>
              <button type="submit" className="cta cta--primary contact__submit">
                {sent ? 'Mensagem enviada' : 'Enviar pelo WhatsApp'}
                {!sent && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Localização e horários */}
        <div className="contact__info">
          <div className="contact__info-block reveal">
            <span className="label" style={{ color: 'rgba(255,255,255,0.35)' }}>Consultório</span>
            <h3 className="contact__info-title">Complexo Vivaz</h3>
            <p className="contact__info-text">
              Galeria via Scala — Av. Beira Mar, 3960<br />
              Loja 18, Mucuripe<br />
              Fortaleza — CE, 60165-121
            </p>

            <div className="contact__map">
              <iframe
                title="Localização do consultório João Pedro Bindá"
                src="https://www.google.com/maps?q=Av.+Beira+Mar,+3960+-+Mucuripe,+Fortaleza+-+CE,+60165-121&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="contact__map-actions">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Beira+Mar,+3960+-+Mucuripe,+Fortaleza+-+CE,+60165-121"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Google Maps
              </a>
              <a
                href="https://www.waze.com/ul?q=Av.+Beira+Mar%2C+3960+-+Mucuripe%2C+Fortaleza+-+CE&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 19 21 12 17 5 21 12 2"/>
                </svg>
                Waze
              </a>
              <a
                href="https://maps.apple.com/?q=Av.+Beira+Mar,+3960+-+Mucuripe,+Fortaleza+-+CE"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="16 8 10 14 8 12"/>
                </svg>
                Apple Maps
              </a>
            </div>
          </div>

          <div className="contact__info-block reveal">
            <span className="label" style={{ color: 'rgba(255,255,255,0.35)' }}>Horário de funcionamento</span>
            <ul className="contact__hours">
              {HOURS.map((h) => (
                <li key={h.day} className={h.time === 'Fechado' ? 'contact__hours-row contact__hours-row--off' : 'contact__hours-row'}>
                  <span className="contact__hours-day">{h.day}</span>
                  <span className="contact__hours-time">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="contact__hours-note">
              Em feriados nacionais, os horários podem ser diferentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
