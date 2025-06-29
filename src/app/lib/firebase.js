// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBFK4EcBVsRi_FEs701yStbqv6YVrpad4",
  authDomain: "malahim-blogging-app.firebaseapp.com",
  projectId: "malahim-blogging-app",
  storageBucket: "malahim-blogging-app.firebasestorage.app",
  messagingSenderId: "442033379531",
  appId: "1:442033379531:web:3ced9ba51e33970550634e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
