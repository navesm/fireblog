import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7KbDsyJerLcZNrH-IjJk_GfdIcxtJISQ",
  authDomain: "fireblog-8c07d.firebaseapp.com",
  projectId: "fireblog-8c07d",
  storageBucket: "fireblog-8c07d.firebasestorage.app",
  messagingSenderId: "909885197458",
  appId: "1:909885197458:web:d7cad37fe60a96286caa4b",
  measurementId: "G-CNQQ02YV0X"
};

// Initialize Firebase only if no apps are already running
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;