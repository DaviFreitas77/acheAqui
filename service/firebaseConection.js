// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYfxCQ2uPNsyaxuHu0dzKUEmxdkNbix_E",
  authDomain: "acheaqui-2bc44.firebaseapp.com",
  projectId: "acheaqui-2bc44",
  storageBucket: "acheaqui-2bc44.appspot.com",
  messagingSenderId: "721997455940",
  appId: "1:721997455940:web:02641ef032245b4b879211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app,storage};