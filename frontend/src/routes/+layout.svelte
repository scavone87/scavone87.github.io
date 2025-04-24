<script lang="ts">
  import '../app.css';
</script>

<div class="app">
  <header>
    <nav>
      <a href="/" class="logo">Rocco Scavone</a>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/apps">App Demo</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div class="footer-content">
      <div>
        <h3>Rocco Scavone</h3>
        <p>Sviluppatore Software</p>
      </div>
      
      <ul class="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/apps">App Demo</a></li>
      </ul>
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
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2563eb;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links li {
    margin-left: 2rem;
  }

  .nav-links a {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #2563eb;
  }

  main {
    flex: 1;
  }

  footer {
    background-color: #4b5563;
    color: #ffffff;
    padding: 3rem 2rem;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  .footer-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer-links li {
    margin-left: 1.5rem;
  }

  .footer-links a {
    color: #e2e8f0;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-links a:hover {
    color: #ffffff;
  }

  .copyright {
    text-align: center;
    margin-top: 2rem;
    color: #e2e8f0;
    font-size: 0.9rem;
    max-width: 1200px;
    margin: 2rem auto 0;
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      padding: 1rem;
    }

    .nav-links {
      margin-top: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .nav-links li {
      margin: 0.5rem;
    }

    .footer-content {
      flex-direction: column;
      text-align: center;
    }

    .footer-links {
      margin-top: 1rem;
      justify-content: center;
    }

    .footer-links li {
      margin: 0 0.75rem;
    }
  }
</style>
