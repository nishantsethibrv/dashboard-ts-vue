import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: '',
    name: '',
    email: ''
  }),
  actions: {
    setUser(user: { uid: string; displayName: string; email: string }) {
      this.userId = user.uid;
      this.name = user.displayName || 'Anonymous';
      this.email = user.email || '';
    },
    clearUser() {
      this.userId = '';
      this.name = '';
      this.email = '';
    }
  }
});
