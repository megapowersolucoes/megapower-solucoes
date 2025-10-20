import Link from "next/link";

export default function HomePage() {
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
      }}
    >
      <img
        src="/brand/logo-megapower-dark.svg"
        alt="Megapower Soluções"
        width="300"
        style={{ marginBottom: "2rem" }}
      />

      <h2 style={{ color: "#00A896", marginBottom: "1rem" }}>
        Acesso ao Painel ALMA CORE
      </h2>

      <p style={{ color: "#AAB5C8", marginBottom: "2rem" }}>
        Área restrita para membros do Conselho e Núcleos Éticos.
      </p>

      <Link href="/login">
        <button
          style={{
            backgroundColor: "#00A896",
            color: "#0B1220",
            border: "none",
            borderRadius: "8px",
            padding: "12px 32px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Entrar com Credenciais Éticas
        </button>
      </Link>
    </main>
  );
}
