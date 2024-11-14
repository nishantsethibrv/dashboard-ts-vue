import { createApp, nextTick } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from './store/user';
import router from './router'; // Import router instance
import './style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router); // Use the router instance in the app
app.mount('#app');

// Ensure user data and redirection after authentication state changes
const userStore = useUserStore();
onAuthStateChanged(auth, async (user) => {
  if (user) {
    userStore.setUser({
      uid: user.uid,
      displayName: user.displayName || '',
      email: user.email || '',
    });
    await nextTick(); // Ensure app is fully mounted before redirecting
    if (router.currentRoute.value.path === '/login') {
      router.push('/dashboard');
    }
  } else {
    userStore.clearUser();
    await nextTick(); // Ensure app is fully mounted before redirecting
    router.push('/login');
  }
});
