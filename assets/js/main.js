// Funzionalità principali del sito

document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Chiudi menu quando si clicca su un link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
  
  // Evidenzia link attivo nel menu
  const currentLocation = window.location.pathname;
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (currentLocation.includes(href) && href !== '/') {
      item.classList.add('active');
    } else if (currentLocation === '/' && href === '/') {
      item.classList.add('active');
    }
  });
  
  // Animazione smooth scroll per ancore
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset per l'header fisso
          behavior: 'smooth'
        });
      }
    });
  });
});
