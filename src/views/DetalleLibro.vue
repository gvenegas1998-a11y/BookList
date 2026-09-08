<template>
  <div class="detalle-libro-view">
    <div class="navigation-bar">
      <router-link to="/libros" class="btn-volver">
        ← Volver al Catálogo
      </router-link>
    </div>

    <!-- Libro encontrado -->
    <article v-if="libroSeleccionado" class="detalle-card">
      <header class="detalle-header">
        <span class="badge-cat">{{ libroSeleccionado.categoria }}</span>
        <h1>{{ libroSeleccionado.titulo }}</h1>
        <p class="autor-line">Autoría a cargo de: <strong>{{ libroSeleccionado.autor }}</strong></p>
      </header>

      <section class="detalle-body">
        <h3>Ficha y Sinopsis</h3>
        <p class="sinopsis-texto">{{ libroSeleccionado.sinopsis }}</p>

        <div class="metadatos-box">
          <div class="meta-item">
            <span class="meta-label">ID Registro:</span>
            <span class="meta-val">#{{ libroSeleccionado.id }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Editorial:</span>
            <span class="meta-val">Editorial Nova</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Estado:</span>
            <span class="meta-val text-success">Disponible en Catálogo</span>
          </div>
        </div>
      </section>
    </article>

    <!-- Caso de ID no existente -->
    <div v-else class="error-card">
      <h2>Libro no encontrado</h2>
      <p>No pudimos hallar ninguna obra registrada con el identificador <strong>#{{ id }}</strong>.</p>
      <router-link to="/libros" class="btn-primary">Ir al Listado</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetalleLibro',
  props: {
    // Requisito Lección 5: Recibir el parámetro dinámico :id desacoplado como prop
    id: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      // Repositorio de consulta para la SPA
      catalogoCompleto: [
        {
          id: 1,
          titulo: 'Alas de Sangre',
          autor: 'Rebecca Yarros',
          categoria: 'Fantasía',
          sinopsis: 'Violet Sorrengail ingresa al peligroso Colegio de Guerra de Basgiath para formarse como jinete de dragones, donde los errores se pagan con la vida.'
        },
        {
          id: 2,
          titulo: 'Cien años de soledad',
          autor: 'Gabriel García Márquez',
          categoria: 'Ficción',
          sinopsis: 'La historia de la familia Buendía a lo largo de siete generaciones en el mítico pueblo de Macondo.'
        },
        {
          id: 3,
          titulo: 'Hábitos Atómicos',
          autor: 'James Clear',
          categoria: 'Desarrollo Personal',
          sinopsis: 'Una guía práctica para descomponer el cambio de comportamiento en pequeños hábitos diarios que producen grandes resultados a largo plazo.'
        },
        {
          id: 4,
          titulo: 'Dune',
          autor: 'Frank Herbert',
          categoria: 'Ciencia Ficción',
          sinopsis: 'En el planeta desértico de Arrakis, el joven Paul Atreides se ve envuelto en una encarnizada lucha por el control de la especia más valiosa del universo.'
        }
      ]
    }
  },
  computed: {
    libroSeleccionado () {
      // Coincidencia por id numérico o string
      return this.catalogoCompleto.find(item => item.id === this.id)
    }
  }
}
</script>

<style scoped>
.detalle-libro-view {
  max-width: 800px;
  margin: 0 auto;
}

.navigation-bar {
  margin-bottom: 1.25rem;
}

.btn-volver {
  display: inline-block;
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-volver:hover {
  text-decoration: underline;
}

.detalle-card, .error-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2.25rem;
}

.badge-cat {
  display: inline-block;
  background-color: #EEF2FF;
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.35rem;
}

.autor-line {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.detalle-body h3 {
  font-size: 1.15rem;
  margin-bottom: 0.6rem;
}

.sinopsis-texto {
  line-height: 1.65;
  color: var(--text-main);
  margin-bottom: 2rem;
}

.metadatos-box {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background-color: #F8FAFC;
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.meta-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 600;
}

.meta-val {
  font-weight: 600;
  font-size: 0.9rem;
}

.text-success {
  color: #10B981;
}

.error-card {
  text-align: center;
}

.error-card p {
  color: var(--text-muted);
  margin: 0.5rem 0 1.5rem;
}

.btn-primary {
  background-color: var(--primary);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
}
</style>
