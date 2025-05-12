<script lang="ts">
  // Task Manager App Demo
  import { onMount } from 'svelte';

  // Interfaccia per la task
  interface Task {
    id: string;
    text: string;
    completed: boolean;
    priority: 'bassa' | 'media' | 'alta';
    category: string;
    createdAt: Date;
  }

  // Stato dell'applicazione
  let tasks: Task[] = [];
  let newTaskText = '';
  let newTaskPriority: 'bassa' | 'media' | 'alta' = 'media';
  let newTaskCategory = '';
  let categories: string[] = ['Lavoro', 'Personale', 'Hobby', 'Famiglia', 'Altro'];
  let selectedCategory = '';
  let searchQuery = '';
  let sortBy = 'createdAt';
  let sortOrder: 'asc' | 'desc' = 'desc';
  
  // Genera un ID univoco per ogni task
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  // Carica i task dal localStorage
  onMount(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      tasks = JSON.parse(savedTasks, (key, value) => {
        if (key === 'createdAt') return new Date(value);
        return value;
      });
    }
  });

  // Salva i task nel localStorage
  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Aggiungi un nuovo task
  const addTask = () => {
    if (newTaskText.trim() === '') return;
    
    const newTask: Task = {
      id: generateId(),
      text: newTaskText,
      completed: false,
      priority: newTaskPriority,
      category: newTaskCategory || 'Altro',
      createdAt: new Date()
    };
    
    tasks = [newTask, ...tasks];
    saveTasks();
    
    // Reset form
    newTaskText = '';
    newTaskPriority = 'media';
    newTaskCategory = '';
  };

  // Rimuovi un task
  const removeTask = (id: string) => {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
  };

  // Aggiorna lo stato di completamento di un task
  const toggleComplete = (id: string) => {
    tasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    saveTasks();
  };

  // Filtra i task in base alla categoria e al testo di ricerca
  $: filteredTasks = tasks
    .filter(task => {
      // Filtra per categoria se selezionata
      if (selectedCategory && task.category !== selectedCategory) {
        return false;
      }
      
      // Filtra per testo di ricerca
      if (searchQuery) {
        return task.text.toLowerCase().includes(searchQuery.toLowerCase());
      }
      
      return true;
    })
    .sort((a, b) => {
      // Ordinamento
      let comparison = 0;
      
      if (sortBy === 'priority') {
        const priorityValues = { 'alta': 3, 'media': 2, 'bassa': 1 };
        comparison = priorityValues[a.priority] - priorityValues[b.priority];
      } else if (sortBy === 'text') {
        comparison = a.text.localeCompare(b.text);
      } else if (sortBy === 'createdAt') {
        comparison = a.createdAt.getTime() - b.createdAt.getTime();
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  // Calcola statistiche delle task
  $: completedCount = tasks.filter(task => task.completed).length;
  $: pendingCount = tasks.length - completedCount;
  $: highPriorityCount = tasks.filter(task => task.priority === 'alta').length;

  // Gestisce l'ordinamento delle task
  const handleSort = (column: string) => {
    if (sortBy === column) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      sortBy = column;
      sortOrder = 'desc';
    }
  };

  // Cancella tutte le task completate
  const clearCompletedTasks = () => {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
  };
</script>

<svelte:head>
  <title>Task Manager - Rocco Scavone</title>
  <meta name="description" content="Applicazione demo per la gestione delle attività quotidiane">
</svelte:head>

<section class="app-container">
  <div class="app-header">
    <h1>Task Manager</h1>
    <p class="app-description">Organizza e gestisci le tue attività quotidiane</p>
  </div>

  <!-- Dashboard delle statistiche -->
  <div class="statistics-dashboard">
    <div class="stat-card">
      <div class="stat-value">{tasks.length}</div>
      <div class="stat-label">Totale</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{pendingCount}</div>
      <div class="stat-label">Da completare</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{completedCount}</div>
      <div class="stat-label">Completate</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{highPriorityCount}</div>
      <div class="stat-label">Alta priorità</div>
    </div>
  </div>

  <!-- Form per aggiungere nuove task -->
  <div class="task-form">
    <h2>Aggiungi una nuova attività</h2>
    <form on:submit|preventDefault={addTask}>
      <div class="form-group">
        <input
          type="text"
          placeholder="Cosa devi fare?"
          bind:value={newTaskText}
          class="form-control"
          required
        />
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="priority">Priorità</label>
          <select id="priority" bind:value={newTaskPriority} class="form-control">
            <option value="bassa">Bassa</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="category">Categoria</label>
          <select id="category" bind:value={newTaskCategory} class="form-control">
            <option value="">Seleziona categoria</option>
            {#each categories as category}
              <option value={category}>{category}</option>
            {/each}
          </select>
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary">Aggiungi</button>
    </form>
  </div>

  <!-- Filtri e ricerca -->
  <div class="tasks-filter">
    <div class="search-box">
      <input
        type="text"
        placeholder="Cerca attività..."
        bind:value={searchQuery}
        class="form-control"
      />
    </div>
    
    <div class="category-filter">
      <select bind:value={selectedCategory} class="form-control">
        <option value="">Tutte le categorie</option>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
    
    <div class="sort-options">
      <select bind:value={sortBy} class="form-control">
        <option value="createdAt">Data creazione</option>
        <option value="priority">Priorità</option>
        <option value="text">Alfabetico</option>
      </select>
      
      <button on:click={() => sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'} class="btn btn-icon">
        {sortOrder === 'asc' ? '↑' : '↓'}
      </button>
    </div>
  </div>

  <!-- Lista delle task -->
  <div class="tasks-container">
    <h2>Le tue attività ({filteredTasks.length})</h2>
    
    {#if filteredTasks.length === 0}
      <div class="empty-state">
        <p>Nessuna attività trovata</p>
        {#if searchQuery || selectedCategory}
          <p>Prova a modificare i filtri</p>
        {:else}
          <p>Aggiungi una nuova attività per iniziare!</p>
        {/if}
      </div>
    {:else}
      <ul class="tasks-list">
        {#each filteredTasks as task (task.id)}
          <li class="task-item" class:completed={task.completed}>
            <div class="task-content">
              <div class="task-checkbox">
                <input
                  type="checkbox"
                  checked={task.completed}
                  on:change={() => toggleComplete(task.id)}
                  id={`task-${task.id}`}
                />
                <label for={`task-${task.id}`}></label>
              </div>
              
              <div class="task-info">
                <div class="task-text">{task.text}</div>
                <div class="task-meta">
                  <span class="task-category">{task.category}</span>
                  <span class="task-date">{task.createdAt.toLocaleDateString()}</span>
                </div>
              </div>
              
              <div class="task-priority" class:priority-high={task.priority === 'alta'} class:priority-medium={task.priority === 'media'} class:priority-low={task.priority === 'bassa'}>
                {task.priority}
              </div>
              
              <button class="delete-btn" on:click={() => removeTask(task.id)} aria-label="Elimina attività">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </li>
        {/each}
      </ul>
      
      {#if completedCount > 0}
        <div class="clear-completed">
          <button on:click={clearCompletedTasks} class="btn btn-outline">
            Cancella attività completate ({completedCount})
          </button>
        </div>
      {/if}
    {/if}
  </div>

  <div class="app-footer">
    <p>Applicazione dimostrativa sviluppata da Rocco Scavone</p>
    <p>I dati vengono salvati localmente nel tuo browser</p>
  </div>
</section>

<style>
  .app-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    color: var(--text-color);
  }

  .app-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .app-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .app-description {
    color: var(--text-color-light);
    font-size: 1.1rem;
  }

  /* Statistiche Dashboard */
  .statistics-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    text-align: center;
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: var(--text-color-light);
    font-size: 0.9rem;
  }

  /* Form per nuove task */
  .task-form {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: var(--box-shadow);
  }

  .task-form h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .form-control {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--input-bg, var(--surface-color));
    color: var(--input-text, var(--text-color));
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .form-control:focus {
    outline: none;
    border-color: var(--input-focus-border, var(--primary-color));
    box-shadow: 0 0 0 3px var(--input-focus-shadow, rgba(var(--primary-rgb), 0.2));
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color-light);
    font-size: 0.9rem;
  }

  /* Filtri e ricerca */
  .tasks-filter {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 1rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }

  .sort-options {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-icon {
    padding: 0.75rem;
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    color: var(--text-color);
    transition: background-color 0.3s ease;
  }

  .btn-icon:hover {
    background-color: var(--hover-bg);
  }

  /* Lista delle task */
  .tasks-container {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .tasks-container h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .empty-state {
    text-align: center;
    padding: 3rem 0;
    color: var(--text-color-light);
  }

  .empty-state p {
    margin: 0.5rem 0;
  }

  .tasks-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .task-item {
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
    transition: background-color 0.3s ease;
  }

  .task-item:last-child {
    border-bottom: none;
  }

  .task-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .task-checkbox input[type="checkbox"] {
    display: none;
  }

  .task-checkbox label {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid var(--border-color);
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }

  .task-checkbox input[type="checkbox"]:checked + label {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }

  .task-checkbox input[type="checkbox"]:checked + label:after {
    content: "";
    position: absolute;
    left: 7px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .task-info {
    flex: 1;
  }

  .task-text {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    transition: text-decoration 0.3s ease, color 0.3s ease;
  }

  .completed .task-text {
    text-decoration: line-through;
    color: var(--text-color-light);
  }

  .task-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--text-color-light);
  }

  .task-category {
    background-color: var(--hover-bg);
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
  }

  .task-priority {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .priority-high {
    background-color: rgba(231, 76, 60, 0.15);
    color: var(--accent-color);
  }

  .priority-medium {
    background-color: rgba(243, 156, 18, 0.15);
    color: var(--accent-light);
  }

  .priority-low {
    background-color: rgba(39, 174, 96, 0.15);
    color: var(--primary-color);
  }

  .delete-btn {
    background: none;
    border: none;
    color: var(--text-color-light);
    cursor: pointer;
    transition: color 0.3s ease;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete-btn:hover {
    color: #e74c3c;
  }

  .clear-completed {
    margin-top: 1.5rem;
    text-align: center;
  }

  /* Footer */
  .app-footer {
    text-align: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-color-light);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .form-row {
      grid-template-columns: 1fr;
    }

    .tasks-filter {
      grid-template-columns: 1fr;
    }

    .task-content {
      flex-wrap: wrap;
    }

    .task-priority {
      margin-top: 0.5rem;
    }
  }
</style>
