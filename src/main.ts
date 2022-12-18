import { createApp } from 'vue';
import index from '@/router';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia'
import App from './App.vue';
import '@/assets/styles/index.scss';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

const pinia = createPinia();

createApp(App).use(index).use(ElementPlus).use(pinia).mount('#app');
