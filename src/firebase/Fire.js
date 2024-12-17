// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {collection} from "firebase/firestore"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhgqnTlEcdPARUVE4iyCh5N8lsF5A52sM",
  authDomain: "movie-a6b71.firebaseapp.com",
  projectId: "movie-a6b71",
  storageBucket: "movie-a6b71.firebasestorage.app",
  messagingSenderId: "954183010647",
  appId: "1:954183010647:web:3b034059b293114a35d612",
  measurementId: "G-2T1V4YV4HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  db = getFirestore(app)
export const mall= collection(db,"movie")
// export default analytics;
export default app