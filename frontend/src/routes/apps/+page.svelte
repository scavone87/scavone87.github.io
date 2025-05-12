<script lang="ts">
  // Apps page
</script>

<svelte:head>
  <title>App Demo - Rocco Scavone</title>
  <meta name="description" content="Applicazioni web dimostrative create da Rocco Scavone">
</svelte:head>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1>App Dimostrative</h1>
    <p>Piccole applicazioni web interattive che mostrano le mie competenze di sviluppo</p>
  </div>
</section>

<!-- App Grid -->
<section>
  <div class="container">
    <div class="grid">
      <!-- App 1: Calcolatrice -->
      <div class="card">
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
          <div class="tags">
            <span class="tag">JavaScript</span>
            <span class="tag">CSS Grid</span>
          </div>
          <a href="/apps/calcolatrice" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
      
      <!-- App 2: Task Manager -->
      <div class="card">
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
          <div class="tags">
            <span class="tag">Svelte</span>
            <span class="tag">LocalStorage</span>
          </div>
          <a href="/apps/task-manager" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
      
      <!-- App 3: Design System Generator -->
      <div class="card">
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
          <div class="tags">
            <span class="tag">TypeScript</span>
            <span class="tag">Svelte</span>
          </div>
          <a href="/apps/design-system" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
      
      <!-- Altre app in arrivo -->
      <div class="card coming-soon">
        <div class="card-content centered">
          <div class="soon-icon">✨</div>
          <h3>Nuova App in Arrivo</h3>
          <p>Sto lavorando a nuove applicazioni innovative. Torna presto per scoprirle!</p>
        </div>
      </div>
      
      <div class="card coming-soon">
        <div class="card-content centered">
          <div class="soon-icon">🚀</div>
          <h3>Nuova App in Arrivo</h3>
          <p>Sto lavorando a nuove applicazioni innovative. Torna presto per scoprirle!</p>
        </div>
      </div>
      
      <div class="card coming-soon">
        <div class="card-content centered">
          <div class="soon-icon">🔮</div>
          <h3>Nuova App in Arrivo</h3>
          <p>Sto lavorando a nuove applicazioni innovative. Torna presto per scoprirle!</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    text-align: center;
    padding: 5rem 0 3rem;
    background-color: var(--light-gray);
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.25rem;
    color: var(--text-color-light);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
    margin: 3rem 0;
  }
  
  .card {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
  
  .card-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .card-content h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
  }
  
  .card-content p {
    color: var(--text-color-light);
    margin-bottom: 1.25rem;
    flex-grow: 1;
  }
  
  .app-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 18px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    margin-bottom: 1.25rem;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .tag {
    background-color: var(--hover-bg);
    color: var(--text-color);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
  }
  
  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease;
    text-align: center;
  }
  
  .btn:hover {
    background-color: var(--primary-dark);
  }
  
  .btn-outline {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }
  
  .btn-outline:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  /* Stili per le app "coming soon" */
  .coming-soon {
    background-color: var(--hover-bg);
    border: 2px dashed var(--border-color);
  }
  
  .centered {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .soon-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
    
    .hero h1 {
      font-size: 2.5rem;
    }
  }
</style>
