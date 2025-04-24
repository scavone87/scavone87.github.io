FROM ruby:3.2-alpine

# Installa le dipendenze necessarie per Jekyll
RUN apk add --no-cache build-base gcc cmake git

# Imposta la directory di lavoro
WORKDIR /app

# Aggiorna bundler alla versione più recente
RUN gem update --system && gem install bundler

# Copia il Gemfile e installa le dipendenze
COPY Gemfile* ./
RUN bundle update --bundler && bundle install

# Copia il resto del progetto
COPY . .

# Espone la porta
EXPOSE 4000

# Comando per avviare Jekyll in modalità di sviluppo
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
