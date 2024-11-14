<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from './store/user';
import { auth } from './firebaseConfig';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

onAuthStateChanged(auth, (user) => {
  if (user) {
    userStore.setUser({ uid: user.uid, displayName: user.displayName, email: user.email });
    if (router.currentRoute.value.path === '/login') {
      router.push('/dashboard');
    }
  } else {
    userStore.clearUser();
    router.push('/login');
  }
});
</script>
