// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhBDY7-nvPltmxuBEinUxB_R2a7yOYe7U",
  authDomain: "otlichnoeducation.firebaseapp.com",
  projectId: "otlichnoeducation",
  storageBucket: "otlichnoeducation.appspot.com",
  messagingSenderId: "862725458663",
  appId: "1:862725458663:web:313c78f022629c9f047042",
  measurementId: "G-EF7QP4BPK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
