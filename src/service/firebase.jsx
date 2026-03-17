// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdpk9KdPYDYrgmv6W6IZnEDcVqmqZwXvo",
  authDomain: "la-verduleria-coder.firebaseapp.com",
  projectId: "la-verduleria-coder",
  storageBucket: "la-verduleria-coder.firebasestorage.app",
  messagingSenderId: "967284841748",
  appId: "1:967284841748:web:cf0c5b52ecf42d9f1e3601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)