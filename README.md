# ExpressoWay

Plataforma de navegação e mobilidade urbana que planeja rotas combinando diferentes modais de transporte (caminhada, ônibus, metrô, trem e bicicleta), com foco em informações em tempo real, alertas e colaboração entre usuários.

Projeto Integrado Multidisciplinar IV (Projeto de Extensão) — Tecnologia em Análise e Desenvolvimento de Sistemas, USCS — Turma 04BN.

## MVP (4º semestre)

Esta versão valida a comunicação entre Front-end e Back-end no fluxo principal de planejamento de rota (RF01): o usuário informa origem e destino, e o sistema devolve a melhor rota com as etapas da viagem, o tempo total e o custo estimado.

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Front-end | HTML5, CSS3 e JavaScript (Fetch API) |
| Back-end | Node.js + Express |
| Banco de dados | SQLite no MVP (tabelas `Usuario` e `Incidente`); PostgreSQL + PostGIS planejado |
| Versionamento | Git + GitHub |

## Estrutura

```
ExpressoWay/
├── backend/
│   └── server.js     # API REST e servidor do front-end
├── frontend/
│   └── index.html    # Interface do MVP
└── package.json
```

## Como executar localmente

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm start
```

Depois, acesse `http://localhost:3000`.

## Como executar com Docker

Pré-requisito: Docker (com Docker Compose).

```bash
docker compose up -d --build
```

A aplicação fica disponível em `http://localhost:3000`. Para parar: `docker compose down`.

## Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| POST | `/api/planejar-rota` | Recebe `{ "origem": "...", "destino": "..." }` e retorna a rota multimodal sugerida |
| GET | `/api/incidentes` | Lista os incidentes reportados |

## Próximos passos

- Autenticação de usuários com JWT
- Migração do banco para PostgreSQL com PostGIS
- Integração com dados reais de transporte público (SPTrans / Google Maps)
- Módulo colaborativo de incidentes na interface

## Equipe

- Bruno Aguiar Lopes
- João Pedro Coelho Silveira
- Pedro Botter Sant'Anna
