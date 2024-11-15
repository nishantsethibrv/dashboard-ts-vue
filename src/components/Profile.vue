<template>
  <div v-if="userStore.user.email" class="flex-1 p-8 bg-gray-50">
    <div class="bg-white rounded-lg shadow-md p-8 max-w-full">
      <h2 class="text-3xl font-semibold text-gray-700 mb-4">Edit Profile</h2>
      <form @submit.prevent="updateProfile">
        <div class="mb-4">
          <label for="name" class="block text-lg text-gray-600">Name</label>
          <input
            v-model="name"
            id="name"
            type="text"
            class="w-full mt-2 p-3 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-lg text-gray-600">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            class="w-full mt-2 p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            disabled
          />
        </div>

        <button
          type="submit"
          class="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Save Changes
        </button>
      </form>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { useUserStore } from '../store/user';

export default {
  data() {
    const userStore = useUserStore();
    return {
      name: userStore.user.displayName || '',  // Initialize with the current user name if available
      email: userStore.user.email || '', // Initialize with the current user email if available
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    }
  },
  methods: {
    updateProfile() {
      const userStore = useUserStore();
      // Update the user's name in the Pinia store
      userStore.setUser({
        ...userStore.user,
        displayName: this.name
      });

      // Handle any logic you need to update the name in Firebase
      console.log('Profile updated:', this.name);
    }
  },
};
</script>

<style scoped>
/* Styling for Profile page */
input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: red;
  color: red;
}
</style>
