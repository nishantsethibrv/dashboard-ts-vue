<template>
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
      <p class="mb-2">User ID: {{ user?.uid }}</p>
      <p class="mb-4">Email: {{ user?.email }}</p>
      <button @click="handleLogout" class="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useAuthStore } from '@/store/authStore';
  import { computed } from 'vue';
  
  const authStore = useAuthStore();
  const user = computed(() => authStore.user);
  
  function handleLogout() {
    authStore.logout();
  }
  </script>
  
  <style scoped>
  /* Add some styling if needed */
  </style>
  