<template>
  <div id="app" class="app-container">
    <header class="navbar">
      <div class="navbar-brand">
        <h2>Editorial Nova</h2>
      </div>
      <nav class="navbar-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/libros">Catálogo de Libros</router-link>
      </nav>
    </header>

    <!-- Renderizado dinámico de vistas según la ruta activa -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Importación de tipografía editorial elegante para títulos */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

/* Paleta Editorial SheKae */
:root {
  --bg-main: #F4EFEA;        /* Avena/lino cálido para el fondo */
  --bg-card: #FDFBF7;        /* Blanco marfil suave para tarjetas */
  --navbar-bg: #EFE8E1;      /* Tono pergamino para la barra de navegación */
  --primary: #3D2332;        /* Ciruela / berenjena profundo para botones y acentos */
  --primary-hover: #26151F;  /* Tono más oscuro al interactuar */
  --text-main: #261A22;      /* Texto principal de alta legibilidad */
  --text-muted: #75686E;     /* Texto secundario y descriptivo */
  --border-color: #E2D7CC;   /* Bordes cálidos y sutiles */
  --accent-gold: #B8977E;    /* Toque dorado para detalles */
  --danger: #8C2F39;         /* Borgoña elegante para acciones destructivas */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background-color: var(--bg-main);
  color: var(--text-main);
  -webkit-font-smoothing: antialiased;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.5rem;
  background-color: var(--navbar-bg);
  border-bottom: 1px solid var(--border-color);
}

.navbar-brand h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--primary);
}

.navbar-links a {
  margin-left: 1.75rem;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.25s ease;
}

.navbar-links a:hover,
.navbar-links a.router-link-active {
  color: var(--primary);
  font-weight: 700;
  border-bottom: 2px solid var(--primary);
  padding-bottom: 0.25rem;
}

.main-content {
  flex: 1;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;
}

/* Tipografía de títulos en toda la app */
h1, h2, h3 {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--text-main);
}
</style>
