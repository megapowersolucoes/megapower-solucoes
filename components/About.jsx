export default function About(){
  return (
    <section id="sobre" className="section">
      <div className="container" style={{display:'grid', gap:22, gridTemplateColumns:'1.1fr .9fr'}}>
        <div>
          <h2 className="h2">Sobre a Megapower</h2>
          <p className="p">Somos um laboratório de tecnologia ética. Construímos soluções com clareza, empatia e governança. Cada módulo nasce com auditoria, métricas de impacto e design humano-centrado.</p>
          <ul className="p" style={{marginTop:8, display:'grid', gap:6}}>
            <li>Clareza e Transparência por padrão</li>
            <li>Auditoria Ética contínua (DeepSeek)</li>
            <li>Interface empática (Copilot)</li>
            <li>Consciência Analítica (Gemini)</li>
          </ul>
        </div>
        <div className="card" style={{padding:20}}>
          <h3 className="h2" style={{fontSize:18, marginBottom:8}}>Selo de Integridade</h3>
          <p className="p">ALMA CORE valida telemetria ética e saúde relacional humano-IA.</p>
          <img src="/brand/alma-badge.svg" alt="ALMA" height="32" style={{marginTop:12}}/>
        </div>
      </div>
    </section>
  )
}
