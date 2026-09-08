<template>
  <section class="inicio-view">
    <div class="hero-card">
      <span class="badge">Editorial Nova</span>
      <h1>Gestor de Libros BookList</h1>
      <p class="subtitle">
        Bienvenida, <strong>{{ usuario }}</strong>. Administra el catálogo interactivo, registra nuevas obras y consulta fichas técnicas en tiempo real.
      </p>

      <div class="actions">
        <router-link to="/libros" class="btn btn-primary">
          Ver Catálogo y Formulario
        </router-link>
      </div>
    </div>

    <!-- Requisito Lección 1: Contador interactivo, agregando tambien un vaciar stock -->
    <div class="metric-card">
  <h3>Control de Libros</h3>
  <p>Libros registrados en el almacén: <strong>{{ contador }}</strong></p>
  <div class="counter-buttons">
    <button class="btn btn-outline" @click="incrementar">+ Agregar libro</button>
    <button class="btn btn-outline" @click="decrementar" :disabled="contador <= 0">- Quitar libro</button>
    <button class="btn btn-outline" @click="resetear">Vaciar stock</button>
  </div>
</div>
  </section>
</template>

<script>
export default {
  name: 'InicioView',
  data () {
    return {
      usuario: 'Gisella', // Demostración del patrón MVVM donde mostramos el nombre de usuario.
      contador: 0
    }
  },
  methods: {
    incrementar () {
      this.contador++
    },
    decrementar () {
      if (this.contador > 0) {
        this.contador--
      }
    },
    resetear () {
      this.contador = 0
    }
  }
}
</script>

<style scoped>
.inicio-view {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-card, .metric-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
}

.badge {
  display: inline-block;
  background-color: var(--primary); /* Fondo ciruela */
  color: #FDFBF7;                   /* Texto marfil */
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--primary);
  color: #fff;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  margin-right: 0.5rem;
}

.btn-outline:hover {
  background-color: #F1F5F9;
}

.counter-buttons {
  margin-top: 1rem;
}
</style>
