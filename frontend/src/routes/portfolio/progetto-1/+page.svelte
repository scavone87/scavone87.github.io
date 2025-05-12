<script lang="ts">
  // Pagina dettaglio progetto 1 - Sistema di Gestione Aziendale
</script>

<svelte:head>
  <title>Sistema di Gestione Aziendale - Rocco Scavone</title>
  <meta name="description" content="Applicazione web per la gestione di risorse aziendali con dashboard interattiva e reportistica avanzata">
</svelte:head>

<section class="project-header bg-alt">
  <div class="container">
    <div class="breadcrumb">
      <a href="/">Home</a> &gt; <a href="/portfolio">Portfolio</a> &gt; <span>Sistema di Gestione Aziendale</span>
    </div>
    <h1 class="animate-fade-in">Sistema di <span class="highlight">Gestione Aziendale</span></h1>
    <div class="project-meta">
      <div class="project-type">Web App</div>
      <div class="project-tags">
        <span class="tag">React</span>
        <span class="tag">Node.js</span>
        <span class="tag">MongoDB</span>
      </div>
    </div>
  </div>
</section>

<section class="project-content">
  <div class="container">
    <div class="project-section">
      <h2>Panoramica del Progetto</h2>
      <p>
        Il Sistema di Gestione Aziendale è un'applicazione web completa progettata per semplificare 
        la gestione delle risorse aziendali. Offre una dashboard interattiva che permette agli 
        utenti di visualizzare metriche chiave e report dettagliati in tempo reale.
      </p>
      
      <div class="project-image">
        <img src="https://via.placeholder.com/1200x600?text=Dashboard+Preview" alt="Dashboard del Sistema di Gestione Aziendale" class="img-responsive" />
      </div>
    </div>

    <div class="project-section">
      <h2>Funzionalità Principali</h2>
      <ul class="feature-list">
        <li>
          <h3>Dashboard Personalizzabile</h3>
          <p>Interfaccia utente intuitiva con widget personalizzabili per monitorare le metriche più importanti per la tua azienda.</p>
        </li>
        <li>
          <h3>Gestione delle Risorse</h3>
          <p>Sistema completo per tracciare e allocare risorse umane, finanziarie e materiali.</p>
        </li>
        <li>
          <h3>Reportistica Avanzata</h3>
          <p>Generazione di report dettagliati con visualizzazioni grafiche avanzate per un'analisi approfondita.</p>
        </li>
        <li>
          <h3>Sistema di Notifiche</h3>
          <p>Avvisi in tempo reale su eventi importanti, scadenze e anomalie nei dati.</p>
        </li>
      </ul>
    </div>

    <div class="project-section">
      <h2>Tecnologie Utilizzate</h2>
      <div class="tech-stack">
        <div class="tech-category">
          <h3>Frontend</h3>
          <ul>
            <li><strong>React</strong> - Libreria per costruire interfacce utente</li>
            <li><strong>Redux</strong> - Gestione dello stato dell'applicazione</li>
            <li><strong>Chart.js</strong> - Visualizzazioni grafiche interattive</li>
            <li><strong>Material-UI</strong> - Framework UI per un design moderno</li>
          </ul>
        </div>
        <div class="tech-category">
          <h3>Backend</h3>
          <ul>
            <li><strong>Node.js</strong> - Runtime JavaScript lato server</li>
            <li><strong>Express</strong> - Framework web per Node.js</li>
            <li><strong>MongoDB</strong> - Database NoSQL</li>
            <li><strong>Mongoose</strong> - ODM per MongoDB</li>
          </ul>
        </div>
        <div class="tech-category">
          <h3>DevOps</h3>
          <ul>
            <li><strong>Docker</strong> - Containerizzazione</li>
            <li><strong>AWS</strong> - Infrastruttura cloud</li>
            <li><strong>CI/CD</strong> - GitHub Actions</li>
            <li><strong>Monitoring</strong> - ELK Stack</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="project-section">
      <h2>Stato del Progetto</h2>
      <div class="project-status">
        <div class="status-badge in-progress">In Sviluppo</div>
        <p>
          Questo progetto è attualmente in fase di sviluppo attivo. I moduli di dashboard e gestione delle risorse 
          sono già funzionanti, mentre stiamo lavorando all'implementazione del sistema di reportistica avanzata 
          e alle integrazioni con servizi esterni.
        </p>
        <div class="progress-container">
          <div class="progress-bar" style="width: 60%;">60%</div>
        </div>
        <p>Data di rilascio prevista: Settembre 2025</p>
      </div>
    </div>

    <div class="project-nav">
      <div class="view-all animate-fade-in">
        <a href="/portfolio" class="btn btn-secondary">Torna al Portfolio</a>
      </div>
    </div>
  </div>
</section>

<style>
  .project-header {
    padding: 4rem 0 2rem;
    position: relative;
  }

  .breadcrumb {
    margin-bottom: 1rem;
    color: var(--text-color-light);
    font-size: 0.9rem;
  }

  .breadcrumb a {
    color: var(--text-color-light);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .breadcrumb a:hover {
    color: var(--primary-color);
  }

  .project-meta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .project-image {
    margin: 2rem 0;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .img-responsive {
    width: 100%;
    height: auto;
    display: block;
  }

  .project-section {
    margin-bottom: 4rem;
  }

  .feature-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .feature-list li {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .feature-list li:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  }

  .feature-list h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.3rem;
  }

  .tech-stack {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .tech-category {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .tech-category h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: var(--primary-color);
  }

  .tech-category ul {
    list-style-type: none;
    padding: 0;
  }

  .tech-category li {
    margin-bottom: 0.75rem;
  }

  .project-status {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .status-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .in-progress {
    background-color: #fff8e6;
    color: #ffa500;
  }

  .progress-container {
    height: 10px;
    background-color: var(--hover-bg);
    border-radius: 5px;
    margin: 1.5rem 0;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    text-align: center;
    font-size: 0.7rem;
    line-height: 10px;
    color: white;
    transition: width 0.5s ease;
  }

  .project-nav {
    margin-top: 3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    .feature-list,
    .tech-stack {
      grid-template-columns: 1fr;
    }
  }
</style>
