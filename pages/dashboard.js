console.log("API_URL ->", process.env.NEXT_PUBLIC_API_URL);
export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "#0B1220",
        color: "#E8EEF6",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 8 }}>ALMA CORE v2 — Megapower</h1>
      <p style={{ opacity: 0.8 }}>
        ✅ Login OK. Backend ativo. DeepSeek pronto para integrar.
      </p>

      <section
        style={{
          marginTop: 24,
          border: "1px solid #1F2B40",
          borderRadius: 12,
          padding: 16,
          background: "#0F1A2A",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Status do Ecossistema</h3>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Frontend (Vercel): online</li>
          <li>Backend (Cloud Run): online</li>
          <li>DeepSeek (ping): configure no passo 2</li>
        </ul>
      </section>
    </main>
  );
}
