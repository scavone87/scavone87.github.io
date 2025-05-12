# Fase di build
FROM node:slim AS build

WORKDIR /app

# Copia i file di configurazione
COPY package*.json ./
COPY svelte.config.js ./
COPY vite.config.ts ./
COPY tsconfig.json ./

# Installa le dipendenze
RUN npm ci

# Copia il codice sorgente
COPY src/ ./src/
COPY static/ ./static/

# Build dell'applicazione
RUN npm run build

# Fase di produzione
FROM node:slim

WORKDIR /app

# Copia i file di build
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./

# Installa solo le dipendenze di produzione
RUN npm ci --omit=dev

# Espone la porta
EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["node", "build"]
