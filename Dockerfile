# Imagem do MVP ExpressoWay (Node.js + Express servindo API e front-end)
FROM node:20-alpine

WORKDIR /app

# Instala apenas as dependências de produção (aproveita o cache de camadas)
COPY package*.json ./
RUN npm ci --omit=dev

# Copia o código da aplicação
COPY backend ./backend
COPY frontend ./frontend

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Executa com usuário sem privilégios
USER node

CMD ["node", "backend/server.js"]
