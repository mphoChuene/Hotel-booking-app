import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEsjAOvmupSZNOQRJljBOHop_AeTp8nMg",
  authDomain: "hotelbooking-app-9d4ab.firebaseapp.com",
  projectId: "hotelbooking-app-9d4ab",
  storageBucket: "hotelbooking-app-9d4ab.appspot.com",
  messagingSenderId: "940873095271",
  appId: "1:940873095271:web:cecd83a64bdf68a08d1cc2",
  measurementId: "G-FLRR005W2E",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
