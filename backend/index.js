const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: [/\.vercel\.app$/, /megapowersolucoes\.com\.br$/]
}));

app.get('/healthz', (_, res) => res.status(200).send('ok'));
app.get('/', (_, res) => res.send('🚀 Megapower backend ativo e funcionando!'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
