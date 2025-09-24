import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// Import global styles
import './assets/styles/main.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')