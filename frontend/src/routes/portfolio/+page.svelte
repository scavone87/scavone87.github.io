<script lang="ts">
  // Portfolio page
</script>

<svelte:head>
  <title>Portfolio - Rocco Scavone</title>
  <meta name="description" content="Portfolio professionale di Rocco Scavone con progetti e lavori">
</svelte:head>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1>Portfolio</h1>
    <p>Una raccolta dei miei progetti e lavori</p>
  </div>
</section>

<!-- Portfolio Grid -->
<section>
  <div class="container">
    <div class="grid">
      <!-- Progetto 1 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400?text=Sistema+di+Gestione+Aziendale" alt="Sistema di Gestione Aziendale" class="card-img">
        <div class="card-content">
          <div class="project-type">Web App</div>
          <h3>Sistema di Gestione Aziendale</h3>
          <p>Applicazione web per la gestione di risorse aziendali con dashboard interattiva e reportistica avanzata.</p>
          <div class="tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">MongoDB</span>
          </div>
          <a href="/portfolio/progetto-1" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
      
      <!-- Progetto 2 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400?text=App+di+Fitness+Personalizzato" alt="App di Fitness Personalizzato" class="card-img">
        <div class="card-content">
          <div class="project-type">Mobile</div>
          <h3>App di Fitness Personalizzato</h3>
          <p>Applicazione mobile per il tracciamento dell'attività fisica con piani di allenamento personalizzati.</p>
          <div class="tags">
            <span class="tag">Flutter</span>
            <span class="tag">Firebase</span>
            <span class="tag">ML Kit</span>
          </div>
          <a href="/portfolio/progetto-2" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
      
      <!-- Progetto 3 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400?text=Sistema+di+Analisi+Predittiva" alt="Sistema di Analisi Predittiva" class="card-img">
        <div class="card-content">
          <div class="project-type">AI</div>
          <h3>Sistema di Analisi Predittiva</h3>
          <p>Soluzione basata su intelligenza artificiale per l'analisi predittiva di dati aziendali e supporto decisionale.</p>
          <div class="tags">
            <span class="tag">Python</span>
            <span class="tag">TensorFlow</span>
            <span class="tag">AWS</span>
          </div>
          <a href="/portfolio/progetto-3" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
      
      <!-- Altri progetti in arrivo... -->
      <div class="card coming-soon">
        <div class="card-content centered">
          <div class="soon-icon">🚧</div>
          <h3>Nuovo Progetto in Arrivo</h3>
          <p>Sto lavorando a nuovi progetti emozionanti. Torna presto per scoprire gli aggiornamenti!</p>
        </div>
      </div>
      
      <div class="card coming-soon">
        <div class="card-content centered">
          <div class="soon-icon">🚧</div>
          <h3>Nuovo Progetto in Arrivo</h3>
          <p>Sto lavorando a nuovi progetti emozionanti. Torna presto per scoprire gli aggiornamenti!</p>
        </div>
      </div>
      
      <div class="card coming-soon">
        <div class="card-content centered">
          <div class="soon-icon">🚧</div>
          <h3>Nuovo Progetto in Arrivo</h3>
          <p>Sto lavorando a nuovi progetti emozionanti. Torna presto per scoprire gli aggiornamenti!</p>
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
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
  
  .card-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .card-content h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
  }
  
  .card-content p {
    color: var(--text-color-light);
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
  
  .project-type {
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
  
  /* Stili per i progetti "coming soon" */
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
