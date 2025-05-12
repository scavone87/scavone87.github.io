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
    <h1 class="animate-fade-in">Benvenuto nel mio <span class="highlight">Spazio Digitale</span></h1>
    <p class="animate-fade-in delay-200">Sviluppatore software, appassionato di tecnologia e condivisione delle conoscenze</p>
    <div class="hero-buttons animate-fade-in delay-400">
      <!-- Link disabilitato fino a completamento della sezione -->
      <!-- <a href="/portfolio" class="btn">Esplora i Progetti</a> -->
      <a href="#contact" class="btn btn-outline">Contattami</a>
    </div>
  </div>

  <!-- Elementi decorativi -->
  <div class="hero-shape shape-1"></div>
  <div class="hero-shape shape-2"></div>
  <div class="hero-shape shape-3"></div>
</section>

<!-- Sezione Portfolio -->
<section id="featured-projects">
  <div class="container">
    <div class="section-title animate-fade-in">
      <h2>Progetti in <span class="highlight">Evidenza</span></h2>
      <p>Una selezione dei miei lavori più recenti e significativi</p>
    </div>

    <div class="grid">
      <!-- Progetto 1 -->
      <div class="card animate-scale delay-100">
        <div class="card-content">
          <div class="project-type">Web App</div>
          <h3>Sistema di Gestione Aziendale</h3>
          <p>Applicazione web per la gestione di risorse aziendali con dashboard interattiva e reportistica avanzata.</p>
          <div class="card-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">MongoDB</span>
          </div>
          <a href="/portfolio/progetto-1" class="btn btn-outline">Esplora Progetto</a>
        </div>
      </div>

      <!-- Progetto 2 -->
      <div class="card animate-scale delay-200">
        <div class="card-content">
          <div class="project-type">Mobile</div>
          <h3>App di Fitness Personalizzato</h3>
          <p>Applicazione mobile per il tracciamento dell'attività fisica con piani di allenamento personalizzati.</p>
          <div class="card-tags">
            <span class="tag">Flutter</span>
            <span class="tag">Firebase</span>
            <span class="tag">ML Kit</span>
          </div>
          <a href="/portfolio/progetto-2" class="btn btn-outline">Esplora Progetto</a>
        </div>
      </div>

      <!-- Progetto 3 -->
      <div class="card animate-scale delay-300">
        <div class="card-content">
          <div class="project-type">AI</div>
          <h3>Sistema di Analisi Predittiva</h3>
          <p>Soluzione basata su intelligenza artificiale per l'analisi predittiva di dati aziendali e supporto decisionale.</p>
          <div class="card-tags">
            <span class="tag">Python</span>
            <span class="tag">TensorFlow</span>
            <span class="tag">AWS</span>
          </div>
          <a href="/portfolio/progetto-3" class="btn btn-outline">Esplora Progetto</a>
        </div>
      </div>
    </div>

    <div class="view-all animate-fade-in">
      <a href="/portfolio" class="btn btn-secondary">Vedi tutti i progetti</a>
    </div>
  </div>
</section>

<!-- Sezione Blog -->
<section id="latest-posts" class="bg-alt">
  <div class="container">
    <div class="section-title animate-fade-in">
      <h2>Ultimi <span class="highlight">Articoli</span></h2>
      <p>Approfondimenti tecnici, tutorial e riflessioni sul mondo dello sviluppo</p>
    </div>

    <div class="grid">
      <!-- Articolo 1 -->
      <div class="card animate-slide-left delay-100">
        <div class="card-content">
          <span class="post-category">Tutorial</span>
          <h3>Architetture Moderne per Applicazioni Web</h3>
          <p class="meta">Pubblicato il 15 Maggio 2024</p>
          <p>Un'analisi approfondita delle architetture moderne per lo sviluppo di applicazioni web scalabili e performanti.</p>
          <div class="card-tags">
            <span class="tag">Architettura</span>
            <span class="tag">Web</span>
            <span class="tag">Performance</span>
          </div>
          <!-- Link disabilitato fino all'integrazione del blog -->
          <span class="btn btn-outline disabled">Prossimamente</span>
        </div>
      </div>

      <!-- Articolo 2 -->
      <div class="card animate-slide-left delay-200">
        <div class="card-content">
          <span class="post-category">Guide</span>
          <h3>Ottimizzazione delle Performance in React</h3>
          <p class="meta">Pubblicato il 10 Maggio 2024</p>
          <p>Strategie e tecniche avanzate per migliorare le performance delle applicazioni React e offrire un'esperienza utente fluida.</p>
          <div class="card-tags">
            <span class="tag">React</span>
            <span class="tag">Performance</span>
            <span class="tag">JavaScript</span>
          </div>
          <!-- Link disabilitato fino all'integrazione del blog -->
          <span class="btn btn-outline disabled">Prossimamente</span>
        </div>
      </div>

      <!-- Articolo 3 -->
      <div class="card animate-slide-left delay-300">
        <div class="card-content">
          <span class="post-category">Approfondimento</span>
          <h3>Il Futuro dell'Intelligenza Artificiale nello Sviluppo Software</h3>
          <p class="meta">Pubblicato il 5 Maggio 2024</p>
          <p>Come l'intelligenza artificiale sta trasformando lo sviluppo software e quali competenze saranno necessarie per i programmatori del futuro.</p>
          <div class="card-tags">
            <span class="tag">AI</span>
            <span class="tag">Futuro</span>
            <span class="tag">Sviluppo</span>
          </div>
          <a href="/blog/ai-sviluppo-software" data-sveltekit-reload class="btn btn-outline">Leggi l'articolo</a>
        </div>
      </div>
    </div>

    <div class="view-all animate-fade-in">
      <a href="/blog/" data-sveltekit-reload class="btn btn-accent disabled">Vedi tutti gli articoli</a>
    </div>
  </div>
</section>

<!-- Sezione App Demo -->
<section id="app-demos">
  <div class="container">
    <div class="section-title animate-fade-in">
      <h2>App <span class="highlight">Dimostrative</span></h2>
      <p>Piccole applicazioni web interattive che mostrano le mie competenze di sviluppo</p>
    </div>

    <div class="grid">
      <!-- App 1 -->
      <div class="card animate-slide-right delay-100">
        <div class="card-content">
          <div class="app-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="9" y2="9"></line>
              <line x1="15" y1="9" x2="15" y2="9"></line>
              <line x1="9" y1="15" x2="9" y2="15"></line>
              <line x1="15" y1="15" x2="15" y2="15"></line>
              <line x1="9" y1="12" x2="9" y2="12"></line>
              <line x1="12" y1="9" x2="12" y2="9"></line>
              <line x1="12" y1="12" x2="12" y2="12"></line>
              <line x1="12" y1="15" x2="12" y2="15"></line>
              <line x1="15" y1="12" x2="15" y2="12"></line>
            </svg>
          </div>
          <h3>Calcolatrice Avanzata</h3>
          <p>Una calcolatrice con funzioni scientifiche, conversione di unità e cronologia dei calcoli.</p>
          <div class="card-tags">
            <span class="tag">JavaScript</span>
            <span class="tag">CSS Grid</span>
          </div>
          <a href="/apps/calcolatrice" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>

      <!-- App 2 -->
      <div class="card animate-slide-right delay-200">
        <div class="card-content">
          <div class="app-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </div>
          <h3>Task Manager</h3>
          <p>Applicazione completa per la gestione delle attività con categorie, priorità e notifiche.</p>
          <div class="card-tags">
            <span class="tag">Svelte</span>
            <span class="tag">LocalStorage</span>
          </div>
          <a href="/apps/task-manager" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>

      <!-- App 3 -->
      <div class="card animate-slide-right delay-300">
        <div class="card-content">
          <div class="app-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="13.5" cy="6.5" r="2.5"></circle>
              <circle cx="19" cy="13" r="2"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="14" cy="18.5" r="1.5"></circle>
            </svg>
          </div>
          <h3>Design System Generator</h3>
          <p>Strumento per creare e gestire sistemi di design completi con esportazione in vari formati.</p>
          <div class="card-tags">
            <span class="tag">TypeScript</span>
            <span class="tag">Canvas API</span>
          </div>
          <a href="/apps/design-system" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
    </div>

    <div class="view-all animate-fade-in">
      <a href="/apps" class="btn">Vedi tutte le app</a>
    </div>
  </div>
</section>

<!-- Sezione Contatti -->
<section id="contact" class="bg-alt">
  <div class="container">
    <div class="section-title animate-fade-in">
      <h2><span class="highlight">Contattami</span></h2>
      <p>Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Scrivimi!</p>
    </div>

    <div class="contact-container animate-scale">
      <div class="contact-card glass">
        <div class="contact-header">
          <div class="contact-avatar">
            <span>RS</span>
          </div>
          <div class="contact-info">
            <h3>Rocco Scavone</h3>
            <p>Sviluppatore Software</p>
          </div>
        </div>

        <div class="contact-body">
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:scavone87@gmail.com" class="animated-link">scavone87@gmail.com</a>
          </div>

          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <a href="https://github.com/scavone87" target="_blank" class="animated-link">github.com/scavone87</a>
          </div>

          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <a href="https://linkedin.com" target="_blank" class="animated-link">linkedin.com/in/rocco-scavone</a>
          </div>
        </div>

        <div class="contact-footer">
          <a href="/assets/cv-rocco-scavone.pdf" class="btn btn-accent">Scarica CV</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Hero Section */
  .hero-buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .hero-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    z-index: 0;
    opacity: 0.5;
  }

  .shape-1 {
    width: 300px;
    height: 300px;
    background-color: rgba(var(--primary-rgb), 0.2);
    top: -100px;
    left: -100px;
    animation: float 15s ease-in-out infinite;
  }

  .shape-2 {
    width: 200px;
    height: 200px;
    background-color: rgba(var(--secondary-rgb), 0.15);
    bottom: -50px;
    right: -50px;
    animation: float 20s ease-in-out infinite reverse;
  }

  .shape-3 {
    width: 150px;
    height: 150px;
    background-color: rgba(var(--accent-rgb), 0.1);
    bottom: 100px;
    left: 30%;
    animation: float 25s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(30px, 20px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  .highlight {
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  /* Cards and Sections */
  .meta {
    color: var(--text-color-light);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .view-all {
    text-align: center;
    margin-top: 3rem;
  }

  .bg-alt {
    background-color: var(--light-gray);
    position: relative;
    overflow: hidden;
  }

  /* Tags */
  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .tag {
    background-color: var(--hover-bg);
    color: var(--text-color);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .post-category, .project-type {
    display: inline-block;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* App Icons */
  .app-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 18px;
    background: linear-gradient(135deg, var(--primary-light), var(--primary-dark));
    color: white;
    margin-bottom: 1.25rem;
  }

  /* Contact Section */
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-card {
    padding: 2rem;
    border-radius: var(--border-radius);
  }

  .contact-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .contact-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
  }

  .contact-avatar span {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .contact-info h3 {
    margin-bottom: 0.25rem;
  }

  .contact-info p {
    color: var(--text-color-light);
    margin: 0;
  }

  .contact-body {
    margin-bottom: 2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .contact-item svg {
    margin-right: 1rem;
    color: var(--primary-color);
  }

  .contact-footer {
    text-align: center;
  }

  @media (max-width: 768px) {
    .hero-buttons {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .hero-buttons .btn {
      width: 100%;
      max-width: 250px;
    }
  }
</style>
