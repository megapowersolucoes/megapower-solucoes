// Importa funções do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração segura usando variável de ambiente
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "megapower-solucoes.firebaseapp.com",
  projectId: "megapower-solucoes",
  storageBucket: "megapower-solucoes.appspot.com",
  messagingSenderId: "64488455601",
  appId: "1:64488455601:web:a45d66e38feda8f966d190"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
