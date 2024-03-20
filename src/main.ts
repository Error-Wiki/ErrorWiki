import { createApp } from 'vue'
import './style.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import App from './App.vue'
import router from './router/router'

createApp(App).use(router).mount('#app')
