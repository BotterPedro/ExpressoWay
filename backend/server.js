const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Serve o front-end (pasta frontend) no mesmo endereço da API
app.use(express.static(path.join(__dirname, '..', 'frontend')));

const usuarios = [{ id: 1, nome: "Juliana", email: "juliana@email.com" }];
const incidentes = [{ id: 1, tipo: "Acidente", local: "Av. Paulista", status: "Ativo" }];

app.post('/api/planejar-rota', (req, res) => {
    const { origem, destino } = req.body;
    res.json({
        status: "sucesso",
        rota: [
            { modal: "Caminhada", trecho: `${origem} até o ponto de ônibus`, tempo: "5 min" },
            { modal: "Ônibus", trecho: "Linha 123 - Terminal", tempo: "15 min" },
            { modal: "Metrô", trecho: "Linha 2 - Verde", tempo: "20 min" },
            { modal: "Caminhada", trecho: `Até ${destino}`, tempo: "5 min" }
        ],
        tempoTotal: "45 minutos",
        custoTotal: "R$ 8,50",
        seguranca: "Alta"
    });
});

app.get('/api/incidentes', (req, res) => {
    res.json(incidentes);
});

// Em hospedagem (ex.: Render) a porta vem da variável de ambiente PORT; localmente usa 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[ExpressoWay] Servidor Back-end rodando na porta ${PORT}`);
    console.log(`[ExpressoWay] Acesse: http://localhost:${PORT}`);
});