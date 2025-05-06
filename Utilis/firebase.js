import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHUt0_cCKm3RtvKg86HhTNBgoTz1zMwV0",
  authDomain: "netflixgpt-d6143.firebaseapp.com",
  projectId: "netflixgpt-d6143",
  storageBucket: "netflixgpt-d6143.firebasestorage.app",
  messagingSenderId: "477846155012",
  appId: "1:477846155012:web:392ced862969f8f6b46a51",
  measurementId: "G-V1K0Y7SSJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();