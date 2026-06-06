// Firebase config system for DOCK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Reemplaza con tus llaves reales de Firebase gowash-5e31a
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "gowash-5e31a.firebaseapp.com",
  projectId: "gowash-5e31a",
  storageBucket: "gowash-5e31a.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicialización de la App
const app = initializeApp(firebaseConfig);

// Exportación limpia de la base de datos Firestore
export const db = getFirestore(app);
