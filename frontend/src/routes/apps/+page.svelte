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
          <h3>Calcolatrice</h3>
          <p>Una semplice calcolatrice con operazioni di base.</p>
          <div class="tags">
            <span class="tag">Svelte</span>
            <span class="tag">TypeScript</span>
            <span class="tag">CSS</span>
          </div>
          <a href="/apps/calcolatrice" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
      
      <!-- App 2: Todo List -->
      <div class="card">
        <div class="card-content">
          <h3>Todo List</h3>
          <p>Applicazione per gestire le attività quotidiane.</p>
          <div class="tags">
            <span class="tag">Svelte</span>
            <span class="tag">TypeScript</span>
            <span class="tag">LocalStorage</span>
          </div>
          <a href="/apps/todo-list" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
      
      <!-- App 3: Generatore di Colori -->
      <div class="card">
        <div class="card-content">
          <h3>Generatore di Colori</h3>
          <p>Crea palette di colori per i tuoi progetti.</p>
          <div class="tags">
            <span class="tag">Svelte</span>
            <span class="tag">TypeScript</span>
            <span class="tag">CSS</span>
          </div>
          <a href="/apps/color-generator" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
      
      <!-- App 4: Quiz -->
      <div class="card">
        <div class="card-content">
          <h3>Quiz Interattivo</h3>
          <p>Quiz su vari argomenti di programmazione.</p>
          <div class="tags">
            <span class="tag">Svelte</span>
            <span class="tag">TypeScript</span>
            <span class="tag">API</span>
          </div>
          <a href="/apps/quiz" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
      
      <!-- App 5: Meteo -->
      <div class="card">
        <div class="card-content">
          <h3>App Meteo</h3>
          <p>Controlla il meteo in tempo reale per qualsiasi città.</p>
          <div class="tags">
            <span class="tag">Svelte</span>
            <span class="tag">TypeScript</span>
            <span class="tag">API</span>
          </div>
          <a href="/apps/meteo" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
      
      <!-- App 6: Convertitore -->
      <div class="card">
        <div class="card-content">
          <h3>Convertitore di Unità</h3>
          <p>Converti facilmente tra diverse unità di misura.</p>
          <div class="tags">
            <span class="tag">Svelte</span>
            <span class="tag">TypeScript</span>
            <span class="tag">CSS</span>
          </div>
          <a href="/apps/convertitore" class="btn btn-outline">Prova l'app</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 2rem 0;
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
