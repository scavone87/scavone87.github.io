document.addEventListener('DOMContentLoaded', function() {
  // Crea il pulsante per il toggle del tema
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.setAttribute('aria-label', 'Cambia tema');
  
  // Controlla se l'utente ha già una preferenza salvata
  const savedTheme = localStorage.getItem('theme');
  
  // Controlla se il sistema operativo preferisce il tema scuro
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Imposta il tema in base alla preferenza salvata o del sistema
  let isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDarkMode);
  
  // Applica il tema iniziale
  if (isDarkMode) {
    document.documentElement.classList.add('dark-mode');
  }
  
  // Aggiorna l'icona del pulsante
  updateThemeToggleIcon();
  
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
    
    updateThemeToggleIcon();
  }
  
  // Funzione per aggiornare l'icona del pulsante
  function updateThemeToggleIcon() {
    themeToggle.innerHTML = isDarkMode 
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  }
  
  // Aggiungi l'evento click al pulsante
  themeToggle.addEventListener('click', toggleTheme);
  
  // Aggiungi il pulsante al DOM
  const themeToggleContainer = document.createElement('li');
  themeToggleContainer.className = 'theme-toggle-container';
  themeToggleContainer.appendChild(themeToggle);
  
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.appendChild(themeToggleContainer);
  }
  
  // Aggiungi la classe 'loaded' all'header dopo un breve ritardo
  setTimeout(() => {
    const header = document.querySelector('.site-header');
    if (header) {
      header.classList.add('loaded');
    }
  }, 100);
  
  // Aggiungi la classe 'animated-link' ai link della navigazione
  const navLinksItems = document.querySelectorAll('.nav-links a:not(.theme-toggle)');
  navLinksItems.forEach(link => {
    link.classList.add('animated-link');
  });
});
