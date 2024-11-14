import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBH0NzZdyIeDmz_zf-zhkBl03PA7PYV52U",
    authDomain: "dashboard-ts-vue.firebaseapp.com",
    projectId: "dashboard-ts-vue",
    storageBucket: "dashboard-ts-vue.firebasestorage.app",
    messagingSenderId: "109707813092",
    appId: "1:109707813092:web:cb978d2001e88dc55a4cf1",
    measurementId: "G-GPN2C3E8CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth,  };
