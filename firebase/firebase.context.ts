// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyCjS9RJk9NwqLgJYicCjj_79wy8N6ebjzQ',
  authDomain: 'proyectotic-7fca7.firebaseapp.com',
  projectId: 'proyectotic-7fca7',
  storageBucket: 'proyectotic-7fca7.appspot.com',
  messagingSenderId: '815902193074',
  appId: '1:815902193074:web:18e8a82709230a6503e0ab',
};

// Initialize firebase
export const app = initializeApp(firebaseConfig);

// Export Modules firebase

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize firebase Authentication and get a reference to the service
export const auth = getAuth(app);
