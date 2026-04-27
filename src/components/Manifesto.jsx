import './Manifesto.css'

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="wrap">
        <div className="manifesto__inner">
          <div className="manifesto__left reveal">
            <span className="label">Posicionamento</span>
            <div className="divider" style={{ marginTop: 20 }} />
          </div>
          <div className="manifesto__right">
            <h2 className="manifesto__text reveal">
              Não existe fórmula mágica.
              <br />
              Existe <em>método</em>, existe <em>constância</em>,
              <br />
              existe um plano feito para você.
            </h2>
            <p className="manifesto__sub reveal">
              A nutrição que funciona não é sobre restrição — é sobre estratégia.
              Um acompanhamento que entende sua rotina, respeita sua individualidade
              e entrega resultado com clareza e direção.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
