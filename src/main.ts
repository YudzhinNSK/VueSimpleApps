import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { router } from './routes/root'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)

app.use(router)

app.mount('#app')

