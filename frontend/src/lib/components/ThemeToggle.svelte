<script lang="ts">
  import { onMount } from 'svelte';
  
  // Stato del tema
  let isDarkMode = false;
  
  // Funzione per cambiare il tema
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Inizializza il tema al caricamento della pagina
  onMount(() => {
    // Controlla se l'utente ha già una preferenza salvata
    const savedTheme = localStorage.getItem('theme');
    
    // Controlla se il sistema operativo preferisce il tema scuro
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Imposta il tema in base alla preferenza salvata o del sistema
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
      isDarkMode = true;
      document.documentElement.classList.add('dark-mode');
    }
  });
</script>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Cambia tema">
  {#if isDarkMode}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .theme-toggle:hover {
    background-color: var(--hover-bg);
  }
  
  .theme-toggle svg {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  
  .theme-toggle:hover svg {
    transform: rotate(15deg) scale(1.1);
  }
  
  .sun, .moon {
    position: relative;
  }
</style>
