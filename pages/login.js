"use client";

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../core/firebaseConfig";

export default function LoginPage() {
  if (typeof window === "undefined") return null;

  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/core/dashboard"; // redireciona após login
    } catch (err) {
      setError("Credenciais incorretas ou acesso não autorizado.");
      setLoading(false);
    }
  };

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
        width="220"
        style={{ marginBottom: "1.5rem" }}
      />

      <h2 style={{ color: "#00A896", marginBottom: "1rem" }}>
        Acesso Ético — ALMA CORE
      </h2>

      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "280px",
        }}
      >
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #00A896",
            backgroundColor: "#101828",
            color: "#E8EEF6",
          }}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #00A896",
            backgroundColor: "#101828",
            color: "#E8EEF6",
          }}
          required
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: loading ? "#058C77" : "#00A896",
            color: "#0B1220",
            border: "none",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>

      {error && (
        <p style={{ color: "#FF6B6B", marginTop: "1rem", fontSize: "0.9rem" }}>
          {error}
        </p>
      )}
    </main>
  );
}
