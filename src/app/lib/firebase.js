// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  limit as limitQuery,
  getDocs,
  getDoc,
  updateDoc,
  setDoc,
  increment,
  getCountFromServer,
} from "firebase/firestore";

// Firebase configuration
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

// 🔢 Get total blog count from Firestore
export const getTotalBlogs = async () => {
  try {
    const blogsRef = collection(db, "MyBlogs");
    const snapshot = await getCountFromServer(blogsRef);
    return snapshot.data().count;
  } catch (error) {
    console.error("Error getting blog count:", error);
    return 0;
  }
};

// 🕒 Get most recent blogs with limit
export const getRecentBlogs = async (limit = 4) => {
  try {
    const blogsRef = collection(db, "MyBlogs");
    const q = query(blogsRef, orderBy("createdAt", "desc"), limitQuery(limit));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        views: data.views || 0,
        status: data.status || "draft",
        createdAt: data.createdAt,
      };
    });
  } catch (error) {
    console.error("Error getting recent blogs:", error);
    return [];
  }
};

// 👀 Count a unique visit (per session)
export const countVisit = async () => {
  if (typeof window === "undefined") return; // Avoid on server

  if (!sessionStorage.getItem("visitCounted")) {
    const docRef = doc(db, "metrics", "visits");
    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, { count: increment(1) });
      } else {
        await setDoc(docRef, { count: 1 });
      }

      sessionStorage.setItem("visitCounted", "true");
    } catch (error) {
      console.error("Visit count error:", error);
    }
  }
};

// 🔄 Get the total visit count
export const getVisitCount = async () => {
  try {
    const docSnap = await getDoc(doc(db, "metrics", "visits"));
    return docSnap.exists() ? docSnap.data().count : 0;
  } catch (error) {
    console.error("Error fetching visit count:", error);
    return 0;
  }
};
