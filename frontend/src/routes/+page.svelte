<script lang="ts">
  // Homepage component
</script>

<svelte:head>
  <title>Rocco Scavone - Portfolio, Blog & App Demo</title>
  <meta name="description" content="Portfolio professionale di Rocco Scavone con blog tecnico e app dimostrative">
</svelte:head>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1>Benvenuto nel mio Spazio Digitale</h1>
    <p>Sviluppatore software, appassionato di tecnologia e condivisione delle conoscenze</p>
    <div class="hero-buttons">
      <a href="/portfolio" class="btn">Esplora i Progetti</a>
      <a href="#contact" class="btn btn-outline">Contattami</a>
    </div>
  </div>
</section>

<!-- Sezione Portfolio -->
<section id="featured-projects">
  <div class="container">
    <div class="section-title">
      <h2>Progetti in Evidenza</h2>
      <p>Una selezione dei miei lavori più recenti e significativi</p>
    </div>

    <div class="grid">
      <!-- Progetto 1 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400" alt="Progetto 1" class="card-img">
        <div class="card-content">
          <h3>Progetto 1</h3>
          <p>Breve descrizione del progetto e delle tecnologie utilizzate.</p>
          <a href="/portfolio/progetto-1" class="btn btn-outline">Dettagli</a>
        </div>
      </div>

      <!-- Progetto 2 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400" alt="Progetto 2" class="card-img">
        <div class="card-content">
          <h3>Progetto 2</h3>
          <p>Breve descrizione del progetto e delle tecnologie utilizzate.</p>
          <a href="/portfolio/progetto-2" class="btn btn-outline">Dettagli</a>
        </div>
      </div>

      <!-- Progetto 3 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400" alt="Progetto 3" class="card-img">
        <div class="card-content">
          <h3>Progetto 3</h3>
          <p>Breve descrizione del progetto e delle tecnologie utilizzate.</p>
          <a href="/portfolio/progetto-3" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
    </div>

    <div class="view-all">
      <a href="/portfolio" class="btn">Vedi tutti i progetti</a>
    </div>
  </div>
</section>

<!-- Sezione Blog -->
<section id="latest-posts" class="bg-light">
  <div class="container">
    <div class="section-title">
      <h2>Ultimi Articoli</h2>
      <p>Approfondimenti tecnici, tutorial e riflessioni sul mondo dello sviluppo</p>
    </div>

    <div class="grid">
      <!-- Articolo 1 -->
      <div class="card">
        <div class="card-content">
          <h3>Titolo Articolo 1</h3>
          <p class="meta">Pubblicato il 15 Maggio 2024</p>
          <p>Breve estratto dell'articolo che introduce l'argomento trattato...</p>
          <a href="/blog/articolo-1" class="btn btn-outline">Leggi l'articolo</a>
        </div>
      </div>

      <!-- Articolo 2 -->
      <div class="card">
        <div class="card-content">
          <h3>Titolo Articolo 2</h3>
          <p class="meta">Pubblicato il 10 Maggio 2024</p>
          <p>Breve estratto dell'articolo che introduce l'argomento trattato...</p>
          <a href="/blog/articolo-2" class="btn btn-outline">Leggi l'articolo</a>
        </div>
      </div>

      <!-- Articolo 3 -->
      <div class="card">
        <div class="card-content">
          <h3>Titolo Articolo 3</h3>
          <p class="meta">Pubblicato il 5 Maggio 2024</p>
          <p>Breve estratto dell'articolo che introduce l'argomento trattato...</p>
          <a href="/blog/articolo-3" class="btn btn-outline">Leggi l'articolo</a>
        </div>
      </div>
    </div>

    <div class="view-all">
      <a href="/blog" class="btn">Vedi tutti gli articoli</a>
    </div>
  </div>
</section>

<!-- Sezione App Demo -->
<section id="app-demos">
  <div class="container">
    <div class="section-title">
      <h2>App Dimostrative</h2>
      <p>Piccole applicazioni web interattive che mostrano le mie competenze di sviluppo</p>
    </div>

    <div class="grid">
      <!-- App 1 -->
      <div class="card">
        <div class="card-content">
          <h3>Calcolatrice</h3>
          <p>Una semplice calcolatrice con operazioni di base.</p>
          <a href="/apps/calcolatrice" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>

      <!-- App 2 -->
      <div class="card">
        <div class="card-content">
          <h3>Todo List</h3>
          <p>Applicazione per gestire le attività quotidiane.</p>
          <a href="/apps/todo-list" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>

      <!-- App 3 -->
      <div class="card">
        <div class="card-content">
          <h3>Generatore di Colori</h3>
          <p>Crea palette di colori per i tuoi progetti.</p>
          <a href="/apps/color-generator" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
    </div>

    <div class="view-all">
      <a href="/apps" class="btn">Vedi tutte le app</a>
    </div>
  </div>
</section>

<!-- Sezione Contatti -->
<section id="contact" class="bg-light">
  <div class="container">
    <div class="section-title">
      <h2>Contattami</h2>
      <p>Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Scrivimi!</p>
    </div>

    <div class="contact-card">
      <div class="card">
        <div class="card-content">
          <p><i class="fas fa-envelope"></i> Email: <a href="mailto:r.scavone@tabsrl.com">r.scavone@tabsrl.com</a></p>
          <p><i class="fab fa-github"></i> GitHub: <a href="https://github.com/scavone87" target="_blank">scavone87</a></p>
          <p><i class="fab fa-linkedin"></i> LinkedIn: <a href="https://linkedin.com" target="_blank">Rocco Scavone</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-buttons {
    margin-top: 2rem;
  }

  .hero-buttons .btn {
    margin: 0 0.5rem;
  }

  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .meta {
    color: var(--dark-gray);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .view-all {
    text-align: center;
    margin-top: 2rem;
  }

  .bg-light {
    background-color: var(--light-gray);
  }

  .contact-card {
    max-width: 600px;
    margin: 0 auto;
  }

  i {
    margin-right: 0.5rem;
  }
</style>
