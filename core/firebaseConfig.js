// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDbZuoAxpA-jRa7Kxn506DqeqzDwKPa-c",
  authDomain: "megapower-solucoes.firebaseapp.com",
  projectId: "megapower-solucoes",
  storageBucket: "megapower-solucoes.appspot.com", // ✅ corrigido aqui
  messagingSenderId: "64488455601",
  appId: "1:64488455601:web:a45d66e38feda8f966d190"
};

// Evita erro de inicialização múltipla no Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
