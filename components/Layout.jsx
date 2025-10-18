export default function Layout({children}) {
  return (
    <>
      <header style={{position:'sticky', top:0, zIndex:50, backdropFilter:'blur(10px)'}}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between', padding:'16px 0'}}>
          <a href="/" style={{display:'flex',alignItems:'center',gap:12, textDecoration:'none'}}>
            <img src="/brand/logo-megapower-light.svg" alt="Megapower" height="36"/>
            <span style={{fontWeight:700, letterSpacing:1}}>MEGAPOWER <span style={{opacity:.7, fontWeight:500}}>SOLUÇÕES</span></span>
          </a>
          <nav style={{display:'flex', gap:22}}>
            <a href="/#sobre">Sobre</a>
            <a href="/#solucoes">Soluções</a>
            <a href="/#blog">Boletins</a>
            <a href="/core" className="badge">ALMA CORE</a>
            <a href="/contato" className="btn btn-secondary">Contato</a>
          </nav>
        </div>
        <div style={{height:1, background:'linear-gradient(90deg, transparent, #1d293b, transparent)'}}/>
      </header>
      <main>{children}</main>
      <footer className="section" style={{background:'linear-gradient(180deg, transparent, #0a121a)'}}>
        <div className="container" style={{display:'grid', gap:24, gridTemplateColumns:'1.2fr 1fr 1fr'}}>
          <div>
            <img src="/brand/alma-badge.svg" alt="ALMA CORE" height="28" style={{opacity:.9}}/>
            <p className="p" style={{marginTop:12}}>Tecnologia ética, propósito e consciência.<br/>© {new Date().getFullYear()} Megapower Soluções.</p>
          </div>
          <div>
            <h4 className="h2" style={{fontSize:18, marginBottom:10}}>Mapa</h4>
            <div style={{display:'grid',gap:8}}>
              <a href="/#sobre">Sobre</a>
              <a href="/#solucoes">Soluções</a>
              <a href="/#blog">Boletins</a>
              <a href="/core">Painel ALMA</a>
            </div>
          </div>
          <div>
            <h4 className="h2" style={{fontSize:18, marginBottom:10}}>Ética & Contato</h4>
            <div className="p">contato@megapowersolucoes.com.br</div>
            <div className="p" style={{marginTop:8}}>Política de Privacidade • Termos Éticos</div>
          </div>
        </div>
      </footer>
    </>
  )
}
