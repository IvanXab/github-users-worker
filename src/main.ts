import { createApp } from 'vue'
import './assets/styles/index.scss'
import App from './App.vue'
import router from "./routes/router";

createApp(App).use(router).mount('#app')
