# 📚 BookList — Plataforma de Gestión de Libros

Aplicación web interactiva desarrollada en **Vue.js** y **Vue Router** para la administración, visualización y control de catálogo literario. Proyecto enfocado en arquitectura por componentes, gestión de estados y flujo unidireccional de datos.

---

## 🚀 Demo y Repositorio

* **URL en vivo:** (https://booklist-three-lake.vercel.app/)
* **Repositorio:** [github.com/gvenegas1998-a11y/BookList]

---

## ✨ Funcionalidades Principales

* **Control de Inventario:** Contador interactivo en portada para sumar, restar y resetear el stock de libros registrados.
* **Catálogo Dinámico:** Renderizado de tarjetas con directivas reactivas (`v-for`, `v-if`, `v-bind`).
* **Componentes Modulares:** Estructuración de tarjetas individuales con sintaxis moderna `<script setup>` (`defineProps` y `defineEmits`).
* **Navegación con Vue Router:** Enrutamiento SPA sin recarga de página:
  * `/`: Vista de inicio con métricas de stock.
  * `/libros`: Catálogo general de publicaciones.
  * `/libros/:id`: Ficha técnica y sinopsis detallada por libro.
* **Diseño Editorial:** Interfaz tipográfica y minimalista con paleta personalizada y diseño adaptativo (*responsive*).

---

## 🛠️ Tecnologías Empleadas

* **Vue.js 3** (Composition API con `<script setup>` y Options API)
* **Vue Router** (rutas dinámicas y parámetros)
* **HTML5 & CSS3** (variables CSS, Flexbox y Grid)
* **Git & GitHub** (control de versiones)
* **Vercel** (despliegue e integración continua)

---
