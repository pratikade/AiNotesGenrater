
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authnotesgen.firebaseapp.com",
  projectId: "authnotesgen",
  storageBucket: "authnotesgen.firebasestorage.app",
  messagingSenderId: "573325782040",
  appId: "1:573325782040:web:d3445ecb290528fd46a76d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}