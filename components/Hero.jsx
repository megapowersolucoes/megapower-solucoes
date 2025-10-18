export default function Hero(){
  return (
    <section className="section" style={{paddingTop:96}}>
      <div className="container" style={{display:'grid', gap:28, gridTemplateColumns:'1.1fr .9fr', alignItems:'center'}}>
        <div>
          <div className="badge">Núcleo Ético & Inteligente — ALMA CORE</div>
          <h1 className="h1" style={{margin:'14px 0 10px'}}>Tecnologia com consciência, <br/>design com propósito.</h1>
          <p className="p">A Megapower Soluções integra Copilot, Gemini e DeepSeek sob o ALMA CORE para entregar sistemas éticos, auditáveis e humanos.</p>
          <div style={{display:'flex', gap:12, marginTop:22}}>
            <a href="#solucoes" className="btn">Ver Soluções</a>
            <a href="/core" className="btn btn-secondary">Entrar no ALMA CORE</a>
          </div>
        </div>
        <div className="card" style={{padding:24, textAlign:'center'}}>
          <img src="/brand/logo-megapower-dark.svg" alt="Megapower" style={{height:70, margin:'18px auto 8px auto'}}/>
          <p className="p" style={{marginTop:8}}>Powered by ALMA CORE v2</p>
          <hr className="sep"/>
          <img src="/brand/alma-badge.svg" alt="ALMA" height="22" style={{opacity:.9}}/>
        </div>
      </div>
    </section>
  )
}
