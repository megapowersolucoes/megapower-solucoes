import React from "react";
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
        padding: "20px",
      }}
    >
      <img
        src="/brand/logo-megapower-dark.svg"
        alt="Megapower Soluções"
        width="300"
        style={{ marginBottom: "2rem" }}
      />

      <h1 style={{ color: "#00A896", marginBottom: "1rem", fontSize: "1.8rem" }}>
        Bem-vindo à Megapower Soluções
      </h1>

      <p style={{ color: "#AAB5C8", marginBottom: "2rem", maxWidth: "500px" }}>
        Inovação e tecnologia para impulsionar o futuro.  
        Acesse o painel <strong>ALMA CORE</strong> abaixo.
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
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#05C3AD")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#00A896")}
        >
          Entrar com Credenciais Éticas
        </button>
      </Link>
    </main>
  );
}
