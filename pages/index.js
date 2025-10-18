export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0B1220",
        color: "#E8EEF6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, Montserrat, sans-serif",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      {/* Logo principal */}
      <img
        src="/brand/logo-megapower-dark.svg"
        alt="Megapower Soluções"
        width="420"
        height="150"
        style={{ marginBottom: "2rem" }}
      />

      {/* Subtítulo */}
      <h2 style={{ color: "#00A896", fontWeight: "600", marginBottom: "0.5rem" }}>
        Núcleo Ético e Inteligente — ALMA CORE
      </h2>

      {/* Descrição */}
      <p style={{ color: "#AAB5C8", maxWidth: "700px", fontSize: "1.2rem" }}>
        Construindo o futuro com tecnologia, propósito e consciência.
      </p>

      {/* Selo */}
      <img
        src="/brand/alma-badge.svg"
        alt="Powered by ALMA CORE v2"
        width="240"
        height="60"
        style={{ marginTop: "3rem", opacity: "0.85" }}
      />
    </main>
  );
}

