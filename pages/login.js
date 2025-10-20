"use client";

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../core/firebaseConfig";


export default function LoginPage() {
  // 🚨 Protege o build do Next.js
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
    <div
      style={{
        backgroundColor: "#0e1624",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1>🔐 Acesso Ético ao ALMA CORE</h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <input
          type="email"
          placeholder="E-mail institucional"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            margin: "8px 0",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            margin: "8px 0",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "12px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#00A896",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading ? "Verificando..." : "Entrar com Credenciais Éticas"}
        </button>
      </form>
      {error && <p style={{ color: "#ff6b6b", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
