/* Función: Punto de entrada de la aplicación.
• Acciones:
• Crea la app con createApp(app).
• Conecta el router  (app.use(router).
• Monta la aplicación en app.mount('#app') */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/proyecto_router1' // Vincula directamente tu archivo de router

const app = createApp(App)

app.use(router)

app.mount('#app')
