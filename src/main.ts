import { createApp } from 'vue';
import router from "./routes/router";
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia'
import App from './App.vue';
import './assets/styles/index.scss';
import 'element-plus/dist/index.css';

const pinia = createPinia();

createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app')
