import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALLfv2zKzJgnIa9TPwSKTFQkBBnfIuWpY",
  authDomain: "socit-796b8.firebaseapp.com",
  projectId: "socit-796b8",
  storageBucket: "socit-796b8.appspot.com",
  messagingSenderId: "568270830546",
  appId: "1:568270830546:web:0c52cbf8a578cb08d1260b",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
