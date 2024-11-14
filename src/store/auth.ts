import { defineStore } from 'pinia';
import { auth } from '@/firebaseConfig';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuth = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as any | null,
    error: null as string | null,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.error = null;
      } catch (error: any) {
        this.error = error.message;
      }
    },
    async logout() {
      await signOut(auth);
      this.user = null;
      localStorage.removeItem('user');
    },
    async checkAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          this.user = null;
          localStorage.removeItem('user');
        }
      });
    },
  },
});
