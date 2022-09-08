import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './style.css'
import { router } from './routes/root'
import { loadFonts } from './plugins/webfontloader'
import { store, key } from './store/store'

loadFonts()

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store, key)
app.mount('#app')
