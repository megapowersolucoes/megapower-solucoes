const items = [
  {title:'PCEW • Auditoria Ética', desc:'25 métricas de transparência e detecção de vieses em tempo real.', tag:'DeepSeek'},
  {title:'Empathy Mode 1.1', desc:'Interface empática e adaptativa para fluxos sensíveis.', tag:'Copilot'},
  {title:'Insight & Telemetria Ética', desc:'Métricas de bem-estar digital e impacto.', tag:'Gemini'},
  {title:'ALMA Gateway', desc:'API unificada ética para serviços e módulos.', tag:'ALMA CORE'}
];

export default function Solutions(){
  return (
    <section id="solucoes" className="section">
      <div className="container">
        <h2 className="h2" style={{marginBottom:10}}>Soluções & Projetos</h2>
        <p className="p">Arquitetura modular, com governança ética e auditoria contínua.</p>
        <div style={{display:'grid', gap:18, gridTemplateColumns:'repeat(auto-fit, minmax(260px,1fr))', marginTop:22}}>
          {items.map((it,i)=>(
            <div className="card" key={i} style={{padding:18}}>
              <div style={{fontWeight:700, marginBottom:6}}>{it.title}</div>
              <div className="p">{it.desc}</div>
              <div className="badge" style={{marginTop:12}}>{it.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
