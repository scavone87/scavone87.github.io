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
        <img src="https://via.placeholder.com/600x400" alt="Progetto 1" class="card-img">
        <div class="card-content">
          <h3>Progetto 1</h3>
          <p>Descrizione dettagliata del progetto, obiettivi e risultati raggiunti.</p>
          <div class="tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
          <a href="/portfolio/progetto-1" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
      
      <!-- Progetto 2 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400" alt="Progetto 2" class="card-img">
        <div class="card-content">
          <h3>Progetto 2</h3>
          <p>Descrizione dettagliata del progetto, obiettivi e risultati raggiunti.</p>
          <div class="tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">MongoDB</span>
          </div>
          <a href="/portfolio/progetto-2" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
      
      <!-- Progetto 3 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400" alt="Progetto 3" class="card-img">
        <div class="card-content">
          <h3>Progetto 3</h3>
          <p>Descrizione dettagliata del progetto, obiettivi e risultati raggiunti.</p>
          <div class="tags">
            <span class="tag">Vue.js</span>
            <span class="tag">Firebase</span>
            <span class="tag">Tailwind CSS</span>
          </div>
          <a href="/portfolio/progetto-3" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
      
      <!-- Progetto 4 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400" alt="Progetto 4" class="card-img">
        <div class="card-content">
          <h3>Progetto 4</h3>
          <p>Descrizione dettagliata del progetto, obiettivi e risultati raggiunti.</p>
          <div class="tags">
            <span class="tag">Python</span>
            <span class="tag">Django</span>
            <span class="tag">PostgreSQL</span>
          </div>
          <a href="/portfolio/progetto-4" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
      
      <!-- Progetto 5 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400" alt="Progetto 5" class="card-img">
        <div class="card-content">
          <h3>Progetto 5</h3>
          <p>Descrizione dettagliata del progetto, obiettivi e risultati raggiunti.</p>
          <div class="tags">
            <span class="tag">WordPress</span>
            <span class="tag">PHP</span>
            <span class="tag">MySQL</span>
          </div>
          <a href="/portfolio/progetto-5" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
      
      <!-- Progetto 6 -->
      <div class="card">
        <img src="https://via.placeholder.com/600x400" alt="Progetto 6" class="card-img">
        <div class="card-content">
          <h3>Progetto 6</h3>
          <p>Descrizione dettagliata del progetto, obiettivi e risultati raggiunti.</p>
          <div class="tags">
            <span class="tag">Angular</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Express</span>
          </div>
          <a href="/portfolio/progetto-6" class="btn btn-outline">Dettagli</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 2rem 0;
  }
  
  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
  }
  
  .tag {
    background-color: var(--light-gray);
    color: var(--secondary-color);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>
