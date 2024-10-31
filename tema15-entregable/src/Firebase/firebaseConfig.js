// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBauziwT9uXQBgD7JfxMTRTs8k3klhor-E",
  authDomain: "prog-web-2024.firebaseapp.com",
  projectId: "prog-web-2024",
  storageBucket: "prog-web-2024.appspot.com",
  messagingSenderId: "163136497906",
  appId: "1:163136497906:web:7b7a1952ae0d691d47486b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);