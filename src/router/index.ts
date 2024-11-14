import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';
import { useUserStore } from '../store/user';
import Profile from '../components/Profile.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.path === '/dashboard' && !userStore.userId) {
    next('/login');
  } else {
    next();
  }
});

export default router;
