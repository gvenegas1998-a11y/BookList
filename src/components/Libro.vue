<template>
  <article class="libro-card">
    <div class="libro-info">
      <span class="categoria-tag">{{ libro.categoria }}</span>
      <h3 class="libro-titulo">{{ libro.titulo }}</h3>
      <p class="libro-autor">Por: {{ libro.autor }}</p>
      <p class="libro-sinopsis-corta">{{ libro.sinopsis }}</p>
    </div>

    <div class="libro-acciones">
      <!-- Navegación por ruta dinámica hacia el detalle -->
      <router-link :to="'/libros/' + libro.id" class="btn-detalle">
        Ver Ficha Detallada
      </router-link>

      <!-- Evento para eliminar usando defineEmits -->
      <button
        type="button"
        class="btn-eliminar"
        @click="eliminarLibro"
      >
        Eliminar
      </button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  libro: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['eliminar'])

const eliminarLibro = () => {
  emit('eliminar', props.libro.id)
}
</script>

<style scoped>
.libro-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(61, 35, 50, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.libro-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(61, 35, 50, 0.08);
}

.categoria-tag {
  display: inline-block;
  align-self: flex-start;
  background-color: #95727A;
  color: #FFFFFF;
  border: 1px solid #7E5C64;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.85rem;
  box-shadow: 0 2px 5px rgba(149, 114, 122, 0.25);
}

.libro-titulo {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.libro-autor {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.libro-sinopsis-corta {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-main);
  margin-bottom: 1.25rem;
  max-height: 4.5rem;
  overflow: hidden;
}

.libro-acciones {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  margin-top: auto;
  gap: 0.75rem;
}

.btn-detalle {
  background-color: var(--primary);
  color: #FDFBF7;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0.5rem 0.9rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.btn-detalle:hover {
  background-color: var(--primary-hover);
}

.btn-eliminar {
  background: transparent;
  border: none;
  color: var(--danger);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.btn-eliminar:hover {
  background-color: #FBEBED;
}
</style>
