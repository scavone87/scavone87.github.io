<script lang="ts">
  // Pagina dettaglio progetto 2 - App di Fitness Personalizzato
</script>

<svelte:head>
  <title>App di Fitness Personalizzato - Rocco Scavone</title>
  <meta name="description" content="Applicazione mobile per il tracciamento dell'attività fisica con piani di allenamento personalizzati">
</svelte:head>

<section class="project-header bg-alt">
  <div class="container">
    <div class="breadcrumb">
      <a href="/">Home</a> &gt; <a href="/portfolio">Portfolio</a> &gt; <span>App di Fitness Personalizzato</span>
    </div>
    <h1 class="animate-fade-in">App di <span class="highlight">Fitness Personalizzato</span></h1>
    <div class="project-meta">
      <div class="project-type">Mobile</div>
      <div class="project-tags">
        <span class="tag">Flutter</span>
        <span class="tag">Firebase</span>
        <span class="tag">ML Kit</span>
      </div>
    </div>
  </div>
</section>

<section class="project-content">
  <div class="container">
    <div class="project-section">
      <h2>Panoramica del Progetto</h2>
      <p>
        L'App di Fitness Personalizzato è un'applicazione mobile progettata per offrire 
        un'esperienza di allenamento su misura per ogni utente. Sfrutta algoritmi avanzati di 
        machine learning per analizzare i dati dell'utente e creare piani di allenamento ottimizzati.
      </p>
      
      <div class="project-image-grid">
        <img src="https://via.placeholder.com/400x800?text=Schermata+Home" alt="Schermata Home dell'app" />
        <img src="https://via.placeholder.com/400x800?text=Analisi+Allenamento" alt="Analisi dell'allenamento" />
        <img src="https://via.placeholder.com/400x800?text=Piano+Personalizzato" alt="Piano personalizzato" />
      </div>
    </div>

    <div class="project-section">
      <h2>Funzionalità Principali</h2>
      <ul class="feature-list">
        <li>
          <h3>Piani Personalizzati</h3>
          <p>Creazione di piani di allenamento adattati alle capacità, agli obiettivi e alle preferenze dell'utente.</p>
        </li>
        <li>
          <h3>Analisi della Forma</h3>
          <p>Utilizzo della fotocamera per analizzare la postura durante gli esercizi e fornire correzioni in tempo reale.</p>
        </li>
        <li>
          <h3>Tracciamento Progressi</h3>
          <p>Monitoraggio dettagliato dei progressi con metriche e visualizzazioni avanzate.</p>
        </li>
        <li>
          <h3>Integrazione Wearable</h3>
          <p>Sincronizzazione con dispositivi indossabili per un monitoraggio completo dell'attività.</p>
        </li>
      </ul>
    </div>

    <div class="project-section">
      <h2>Tecnologie Utilizzate</h2>
      <div class="tech-stack">
        <div class="tech-category">
          <h3>Framework</h3>
          <ul>
            <li><strong>Flutter</strong> - Framework UI multi-piattaforma</li>
            <li><strong>Dart</strong> - Linguaggio di programmazione</li>
            <li><strong>Provider</strong> - Gestione dello stato</li>
            <li><strong>Bloc</strong> - Pattern per la separazione della logica</li>
          </ul>
        </div>
        <div class="tech-category">
          <h3>Backend & Data</h3>
          <ul>
            <li><strong>Firebase</strong> - Piattaforma di sviluppo</li>
            <li><strong>Firestore</strong> - Database NoSQL</li>
            <li><strong>Cloud Functions</strong> - Funzioni serverless</li>
            <li><strong>Firebase Auth</strong> - Autenticazione utenti</li>
          </ul>
        </div>
        <div class="tech-category">
          <h3>Machine Learning</h3>
          <ul>
            <li><strong>ML Kit</strong> - Framework ML per dispositivi mobili</li>
            <li><strong>TensorFlow Lite</strong> - ML ottimizzato per mobile</li>
            <li><strong>Pose Estimation</strong> - Rilevamento postura</li>
            <li><strong>Custom Models</strong> - Modelli personalizzati</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="project-section">
      <h2>Sfide Tecniche</h2>
      <p>
        Lo sviluppo di questa applicazione ha presentato diverse sfide tecniche interessanti che hanno 
        richiesto soluzioni innovative:
      </p>
      <div class="challenges">
        <div class="challenge">
          <h3>Precisione del Riconoscimento Posturale</h3>
          <p>
            Abbiamo ottimizzato i modelli di pose estimation per funzionare efficacemente anche 
            in condizioni di illuminazione non ideale e con inquadrature parziali, utilizzando 
            tecniche di data augmentation durante l'addestramento.
          </p>
        </div>
        <div class="challenge">
          <h3>Performance su Dispositivi di Fascia Bassa</h3>
          <p>
            Per garantire un'esperienza fluida anche su dispositivi meno potenti, abbiamo implementato 
            tecniche di ottimizzazione come la quantizzazione dei modelli ML e l'elaborazione in 
            background per operazioni computazionalmente intensive.
          </p>
        </div>
        <div class="challenge">
          <h3>Personalizzazione degli Algoritmi</h3>
          <p>
            Abbiamo sviluppato un sistema di apprendimento continuo che affina le raccomandazioni 
            in base ai feedback e ai progressi dell'utente, migliorando costantemente la precisione 
            dei piani personalizzati.
          </p>
        </div>
      </div>
    </div>

    <div class="project-section">
      <h2>Stato del Progetto</h2>
      <div class="project-status">
        <div class="status-badge in-progress">In Sviluppo</div>
        <p>
          L'app è attualmente in fase di sviluppo beta. Le funzionalità di base del tracciamento 
          dell'attività e della creazione di piani personalizzati sono operative, mentre stiamo 
          perfezionando il sistema di analisi della postura e le integrazioni con dispositivi indossabili.
        </p>
        <div class="progress-container">
          <div class="progress-bar" style="width: 70%;">70%</div>
        </div>
        <p>Data di rilascio prevista: Agosto 2025</p>
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

  .project-image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .project-image-grid img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
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

  .challenges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .challenge {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .challenge h3 {
    margin-top: 0;
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-bottom: 1rem;
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
    .project-image-grid {
      grid-template-columns: 1fr;
    }

    .feature-list,
    .tech-stack,
    .challenges {
      grid-template-columns: 1fr;
    }
  }
</style>
