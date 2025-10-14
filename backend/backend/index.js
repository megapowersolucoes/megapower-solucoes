import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/health", (req, res) => res.json({ status: "OK", service: "Megapower Core" }));

app.listen(PORT, () => {
  console.log(`🚀 Servidor Megapower Core rodando na porta ${PORT}`);
});
