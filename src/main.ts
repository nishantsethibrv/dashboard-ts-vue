import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';
import {useAuth} from "./store/auth";

const app = createApp(App)
app.use(createPinia())
app.use(router)
const authentication = useAuth();
authentication.checkAuth();
app.mount('#app')