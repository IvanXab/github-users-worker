import { createApp } from 'vue'
import './assets/styles/index.scss'
import App from './App.vue'
import router from "./routes/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
