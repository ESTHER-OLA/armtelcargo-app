import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDx7xjaYiI9EUMY2Y_ouTqd9EEXAxcDpU0",
  authDomain: "armtelcargo-app.firebaseapp.com",
  projectId: "armtelcargo-app",
  storageBucket: "armtelcargo-app.appspot.com",
  messagingSenderId: "817608480037",
  appId: "1:817608480037:web:bbd480e4fd2074299476cc",
  measurementId: "G-E2WNHQRXWD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
