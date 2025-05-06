import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHUt0_cCKm3RtvKg86HhTNBgoTz1zMwV0",
  authDomain: "netflixgpt-d6143.firebaseapp.com",
  projectId: "netflixgpt-d6143",
  storageBucket: "netflixgpt-d6143.firebasestorage.app",
  messagingSenderId: "477846155012",
  appId: "1:477846155012:web:392ced862969f8f6b46a51",
  measurementId: "G-V1K0Y7SSJ7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();