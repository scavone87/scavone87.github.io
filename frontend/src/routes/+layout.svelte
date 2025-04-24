<script lang="ts">
  import '../app.css';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { onMount } from 'svelte';

  // Animazione di caricamento della pagina
  let pageLoaded = false;

  onMount(() => {
    // Imposta pageLoaded a true dopo un breve ritardo per attivare le animazioni
    setTimeout(() => {
      pageLoaded = true;
    }, 100);
  });
</script>

<div class="app">
  <header class:loaded={pageLoaded}>
    <nav>
      <div class="nav-left">
        <a href="/" class="logo">
          <span class="logo-text">Rocco Scavone</span>
        </a>
      </div>

      <ul class="nav-links">
        <li><a href="/" class="animated-link">Home</a></li>
        <li><a href="/portfolio" class="animated-link">Portfolio</a></li>
        <li><a href="/blog/" data-sveltekit-reload class="animated-link">Blog</a></li>
        <li><a href="/apps" class="animated-link">App Demo</a></li>
        <li class="theme-toggle-container">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  </header>

  <main class:loaded={pageLoaded}>
    <slot />
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-info">
        <h3>Rocco Scavone</h3>
        <p>Sviluppatore Software</p>
        <div class="social-links">
          <a href="https://github.com/scavone87" target="_blank" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="mailto:r.scavone@tabsrl.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-nav">
        <h4>Navigazione</h4>
        <ul class="footer-links">
          <li><a href="/" class="animated-link">Home</a></li>
          <li><a href="/portfolio" class="animated-link">Portfolio</a></li>
          <li><a href="/blog/" data-sveltekit-reload class="animated-link">Blog</a></li>
          <li><a href="/apps" class="animated-link">App Demo</a></li>
        </ul>
      </div>
    </div>

    <div class="copyright">
      <p>&copy; 2024 Rocco Scavone. Tutti i diritti riservati.</p>
    </div>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    background-color: var(--surface-color);
    box-shadow: var(--box-shadow);
    position: sticky;
    top: 0;
    z-index: 100;
    transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(-10px);
  }

  header.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
  }

  .nav-left {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .logo-text {
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .nav-links li {
    margin-left: 2rem;
  }

  .nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    padding: 0.5rem 0;
  }

  .nav-links a:hover {
    color: var(--primary-color);
  }

  .theme-toggle-container {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  main {
    flex: 1;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  main.loaded {
    opacity: 1;
  }

  footer {
    background-color: var(--secondary-dark);
    color: #ffffff;
    padding: 4rem 2rem 2rem;
    position: relative;
    overflow: hidden;
  }

  footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--accent-color));
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
  }

  .footer-info {
    max-width: 300px;
  }

  .footer-info h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, var(--primary-light), var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  .footer-info p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-links a {
    color: rgba(255, 255, 255, 0.8);
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .social-links a:hover {
    color: #ffffff;
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }

  .footer-nav h4 {
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  .footer-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-links a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: var(--transition);
    font-weight: 500;
  }

  .footer-links a:hover {
    color: #ffffff;
  }

  .copyright {
    text-align: center;
    margin-top: 3rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    max-width: var(--max-width);
    margin: 3rem auto 0;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 992px) {
    .nav-links li {
      margin-left: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      padding: 1rem;
    }

    .nav-links {
      margin-top: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .nav-links li {
      margin: 0 0.5rem;
    }

    .theme-toggle-container {
      margin-top: 1rem;
      margin-left: 0;
    }

    .footer-content {
      flex-direction: column;
      gap: 2.5rem;
    }

    .footer-info {
      max-width: 100%;
      text-align: center;
    }

    .social-links {
      justify-content: center;
    }

    .footer-nav {
      text-align: center;
    }

    .footer-links {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .footer-links li {
      margin: 0 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .logo-text {
      font-size: 1.25rem;
    }

    .nav-links {
      gap: 0.5rem;
    }

    .nav-links a {
      font-size: 0.9rem;
    }
  }
</style>
