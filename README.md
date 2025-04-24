# Portfolio, Blog e App Demo su GitHub Pages

Questo è il mio sito personale ospitato su GitHub Pages. Puoi visitarlo all'indirizzo [scavone87.github.io](https://scavone87.github.io).

## Struttura del Progetto

Il progetto è strutturato in diverse parti:

- **Frontend**: Implementato con SvelteKit, contiene la homepage, il portfolio e le app dimostrative
- **Blog**: Implementato con Jekyll, contiene articoli tecnici e tutorial

## Tecnologie Utilizzate

### Frontend
- SvelteKit
- TypeScript
- CSS moderno

### Blog
- Jekyll
- Markdown
- Liquid templates

### Infrastruttura
- Docker e Docker Compose per lo sviluppo locale
- Nginx come proxy inverso
- GitHub Actions per CI/CD
- GitHub Pages per l'hosting

## Sviluppo Locale

Il progetto utilizza Docker e Docker Compose per garantire un ambiente di sviluppo coerente con la produzione.

### Avvio dell'ambiente di sviluppo
```bash
# Clona il repository
git clone https://github.com/scavone87/scavone87.github.io.git
cd scavone87.github.io

# Avvia i container Docker
docker-compose up -d

# Accedi al sito all'indirizzo http://localhost:8080
```

L'ambiente di sviluppo locale è configurato per replicare l'ambiente di produzione:
- Frontend: accessibile all'URL principale (http://localhost:8080/)
- Blog: accessibile all'URL /blog/ (http://localhost:8080/blog/)

### Struttura Docker
- **Frontend**: Container SvelteKit con hot-reload
- **Blog**: Container Jekyll con live-reload
- **Nginx**: Proxy inverso che gestisce entrambi i servizi sotto lo stesso dominio

### Sviluppo Manuale (senza Docker)

#### Frontend (SvelteKit)
```bash
cd frontend
npm install
npm run dev
```

#### Blog (Jekyll)
```bash
cd blog
bundle install
bundle exec jekyll serve
```

## Deployment

Il deployment viene gestito automaticamente tramite GitHub Actions quando viene effettuato un push sul branch main. Il workflow:

1. Costruisce il frontend (SvelteKit) utilizzando Docker
2. Costruisce il blog (Jekyll) utilizzando Docker
3. Combina i risultati in una singola directory
4. Pubblica il contenuto su GitHub Pages

## Struttura dei File

- `frontend/`: Codice sorgente del frontend SvelteKit
- `blog/`: Codice sorgente del blog Jekyll
- `.github/workflows/`: Configurazione GitHub Actions per CI/CD
- `docker-compose.yml`: Configurazione Docker Compose per lo sviluppo locale
- `nginx.conf`: Configurazione Nginx per il proxy inverso

## Stato del Progetto

Questo progetto è in continuo sviluppo. Nuove funzionalità e miglioramenti verranno aggiunti regolarmente.
