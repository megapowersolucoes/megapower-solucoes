const express = require('express');
const cors = require('cors');

const app = express();

// Configuração do CORS
app.use(express.json());
app.use(
  cors({
    origin: [/\.vercel\.app$/, /megapowersolucoes\.com\.br$/],
  })
);

// 🔹 Rota padrão de status
app.get('/healthz', (_, res) => res.status(200).send('ok'));

// 🔹 Página inicial de teste
app.get('/', (_, res) =>
  res.send('🚀 Megapower backend ativo e funcionando!')
);

// ===================================================
// 🔸 NOVAS ROTAS DE INTEGRAÇÃO DEEPSEEK / ALMA CORE
// ===================================================

// ✅ Endpoint de monitoramento (ping)
app.get('/api/ethical-audit/ping', (_, res) => {
  res.json({
    ok: true,
    service: 'DeepSeek Ethical Audit',
    version: 'alpha',
    ts: new Date().toISOString(),
  });
});

// ✅ Endpoint futuro de auditoria ética (mock por enquanto)
app.post('/api/ethical-audit', (req, res) => {
  const { content = '' } = req.body || {};
  const score = Math.max(0, 100 - Math.floor(content.length / 100)); // Simulação simples
  const alerts = score < 70 ? ['Revisar linguagem e contexto'] : [];
  res.json({
    ok: true,
    score,
    alerts,
    recommendations: score < 85 ? ['Ajustar tom', 'Reforçar fontes'] : [],
  });
});

// ===================================================

// 🔹 Porta do servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
