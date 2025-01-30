import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7KbDsyJerLcZNrH-IjJk_GfdIcxtJISQ",
  authDomain: "fireblog-8c07d.firebaseapp.com",
  projectId: "fireblog-8c07d",
  storageBucket: "fireblog-8c07d.firebasestorage.app",
  messagingSenderId: "909885197458",
  appId: "1:909885197458:web:d7cad37fe60a96286caa4b",
  measurementId: "G-CNQQ02YV0X"
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();