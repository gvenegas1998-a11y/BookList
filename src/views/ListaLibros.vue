<template>
  <div class="lista-libros-view">
    <!-- Formulario interactivo (Lección 3 y 4) -->
    <section class="form-container">
      <h2>Registrar Nueva Obra</h2>
      <p class="section-desc">Completa los campos para añadir un nuevo libro al catálogo editorial.</p>

      <form @submit.prevent="agregarLibro" class="book-form">
        <div class="form-group">
          <label for="titulo">Título del Libro *</label>
          <input
            id="titulo"
            type="text"
            v-model.trim="nuevoLibro.titulo"
            placeholder="Ej: Alas de Sangre"
            required
            @keyup.enter="agregarLibro"
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="autor">Autor *</label>
            <input
              id="autor"
              type="text"
              v-model.trim="nuevoLibro.autor"
              placeholder="Ej: Rebecca Yarros"
              required
            />
          </div>

          <div class="form-group">
            <label for="categoria">Categoría *</label>
            <select id="categoria" v-model="nuevoLibro.categoria" required>
              <option value="" disabled>Selecciona una categoría</option>
              <option value="Fantasía">Fantasía</option>
              <option value="Ficción">Ficción</option>
              <option value="Ciencia Ficción">Ciencia Ficción</option>
              <option value="Romance">Romance</option>
              <option value="Historia">Historia</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="sinopsis">Sinopsis o Resumen</label>
          <textarea
            id="sinopsis"
            v-model.trim="nuevoLibro.sinopsis"
            rows="3"
            placeholder="Breve descripción o sinopsis de la obra..."
          ></textarea>
        </div>

        <!-- Botón con @click -->
        <button type="submit" class="btn-submit" @click="agregarLibro">
          Registrar Libro en Catálogo
        </button>
      </form>

      <!-- Requisito Lección 3: Previsualización en tiempo real -->
      <div class="live-preview">
        <h4>Vista previa en tiempo real:</h4>
        <p><strong>Título:</strong> {{ nuevoLibro.titulo || '(Pendiente)' }}</p>
        <p><strong>Autor:</strong> {{ nuevoLibro.autor || '(Pendiente)' }}</p>
        <p><strong>Categoría:</strong> {{ nuevoLibro.categoria || '(No seleccionada)' }}</p>
        <p><strong>Sinopsis:</strong> {{ nuevoLibro.sinopsis || '(Sin sinopsis aún)' }}</p>
      </div>
    </section>

    <!-- SECCIÓN: Catálogo de libros (Lección 2 y 4) -->
    <section class="catalogo-container">
      <div class="catalogo-header">
        <h2>Catálogo de Obras ({{ librosFiltrados.length }})</h2>

        <!-- Filtro rápido por categoría -->
        <div class="filtro-box">
          <label for="filtro">Filtrar por:</label>
          <select id="filtro" v-model="categoriaFiltro">
            <option value="Todas">Todas las categorías</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ficción">Ficción</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Romance">Romance</option>
            <option value="Historia">Historia</option>
          </select>
        </div>
      </div>

      <!-- Requisito Lección 2: Mensaje si no hay libros disponibles (v-if / v-else) -->
      <div v-if="librosFiltrados.length === 0" class="empty-state">
        <p>No se encontraron libros disponibles en este momento.</p>
        <span class="empty-sub">Registra un nuevo título utilizando el formulario superior.</span>
      </div>

      <!-- Renderizado iterativo usando componente hijo reutilizable (v-for + props + @eliminar) -->
      <div v-else class="grid-libros">
        <Libro
          v-for="libro in librosFiltrados"
          :key="libro.id"
          :libro="libro"
          @eliminar="eliminarLibro"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Libro from '../components/Libro.vue'

export default {
  name: 'ListaLibros',
  components: {
    Libro
  },
  data () {
    return {
      categoriaFiltro: 'Todas',
      nuevoLibro: {
        titulo: '',
        autor: '',
        categoria: '',
        sinopsis: ''
      },
      libros: [
        {
          id: 1,
          titulo: 'Alas de Sangre',
          autor: 'Rebecca Yarros',
          categoria: 'Fantasía',
          sinopsis: 'Violet Sorrengail ingresa al peligroso Colegio de Guerra de Basgiath para formarse como jinete de dragones, donde los errores se pagan con la vida.'
        },
        {
          id: 2,
          titulo: 'Los Juegos del hambre',
          autor: 'Suzanne Collins',
          categoria: 'Ficción',
          sinopsis: 'En un futuro distópico, dos adolescentes son seleccionados para participar en un juego televisivo llamado los Juegos del hambre.'
        },
        {
          id: 3,
          titulo: 'La hipótesis del amor',
          autor: 'Ali Hazelwood',
          categoria: 'Romance',
          sinopsis: 'Olive, una neurocientífica, se enfrenta a desafíos profesionales y personales mientras navega por el mundo académico y el amor.'
        },
        {
          id: 4,
          titulo: 'Harry potter y la piedra filosofal',
          autor: 'J.K. Rowling',
          categoria: 'Fantasía',
          sinopsis: 'Harry Potter es un niño de 11 años que descubre que es un mago y es aceptado en el colegio Hogwarts.'
        }
      ]
    }
  },
  computed: {
    librosFiltrados () {
      if (this.categoriaFiltro === 'Todas') {
        return this.libros
      }
      return this.libros.filter(l => l.categoria === this.categoriaFiltro)
    }
  },
  methods: {
    agregarLibro () {
      if (!this.nuevoLibro.titulo || !this.nuevoLibro.autor || !this.nuevoLibro.categoria) {
        alert('Por favor, completa los campos requeridos.')
        return
      }

      const nuevoId = this.libros.length > 0
        ? Math.max(...this.libros.map(l => l.id)) + 1
        : 1

      this.libros.unshift({
        id: nuevoId,
        titulo: this.nuevoLibro.titulo,
        autor: this.nuevoLibro.autor,
        categoria: this.nuevoLibro.categoria,
        sinopsis: this.nuevoLibro.sinopsis || 'Sin descripción disponible.'
      })

      // Limpiar formulario reactivo
      this.nuevoLibro = {
        titulo: '',
        autor: '',
        categoria: '',
        sinopsis: ''
      }
    },
    eliminarLibro (id) {
      this.libros = this.libros.filter(libro => libro.id !== id)
    }
  }
}
</script>

<style scoped>
.lista-libros-view {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.form-container, .catalogo-container {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.75rem;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 0.25rem;
  color: var(--text-main);
}

.section-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
}

.book-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-row .form-group {
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
}

input, select, textarea {
  padding: 0.65rem 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
  background-color: #FAFAFA;
  font-family: inherit;
}

input:focus, select:focus, textarea:focus {
  border-color: var(--primary);
  background-color: #FFFFFF;
}

.btn-submit {
  background-color: var(--primary);
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 0.5rem;
}

.btn-submit:hover {
  background-color: var(--primary-hover);
}

.live-preview {
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  background-color: #F8FAFC;
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--primary);
  border-radius: 6px;
  font-size: 0.95rem;
}

.live-preview h4 {
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 0.75rem;
}

.live-preview p {
  margin-bottom: 0.4rem;
  line-height: 1.5;
}

.catalogo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.filtro-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  border: 2px dashed var(--border-color);
  border-radius: 8px;
}

.empty-state p {
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.empty-sub {
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
  }
  .catalogo-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
