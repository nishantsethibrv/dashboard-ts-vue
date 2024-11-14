<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Sidebar -->
    <div class="w-64 bg-blue-800 text-white p-6">
      <h2 class="text-2xl font-bold">Dashboard</h2>
      <ul class="mt-8 space-y-4">
        <li>
          <router-link to="/dashboard" class="text-gray-200 hover:text-white">Home</router-link>
        </li>
        <li>
          <router-link to="/profile" class="text-gray-200 hover:text-white">Profile</router-link>
        </li>
        <li>
          <router-link to="/settings" class="text-gray-200 hover:text-white">Settings</router-link>
        </li>
      </ul>
    </div>

    <!-- Main content area -->
    <div class="flex-1 p-8 bg-gray-50">
      <div class="bg-white rounded-lg shadow-md p-8 max-w-full">
        <h2 class="text-3xl font-semibold text-gray-700 mb-4">Welcome, {{ user.name }}</h2>
        <p class="text-lg text-gray-600">User ID: <span class="font-semibold">{{ user.userId }}</span></p>
        <p class="text-lg text-gray-600">Email: <span class="font-semibold">{{ user.email }}</span></p>
        <button
          @click="logout"
          class="mt-6 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { useUserStore } from '../store/user';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const user = userStore.$state;

async function logout() {
  await signOut(auth);
  userStore.clearUser();
  router.push('/login');
}
</script>
