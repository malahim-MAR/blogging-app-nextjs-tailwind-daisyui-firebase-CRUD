// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, increment, updateDoc, getDoc, setDoc } from "firebase/firestore";

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

// Visit counter functions
export const countVisit = async () => {
  if (typeof window === 'undefined') return; // Skip on server
  
  if (!sessionStorage.getItem('visitCounted')) {
    try {
      const docRef = doc(db, "metrics", "visits");
      await updateDoc(docRef, { count: increment(1) });
      sessionStorage.setItem('visitCounted', 'true');
    } catch (error) {
      if (error.code === 'not-found') {
        await setDoc(doc(db, "metrics", "visits"), { count: 1 });
        sessionStorage.setItem('visitCounted', 'true');
      }
    }
  }
};

export const getVisitCount = async () => {
  try {
    const docSnap = await getDoc(doc(db, "metrics", "visits"));
    return docSnap.exists() ? docSnap.data().count : 0;
  } catch (error) {
    return 0;
  }
};