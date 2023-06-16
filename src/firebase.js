// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNU2xhmnub0u6dckHBHjq6RJzB1JXPU9c",
  authDomain: "tugas-reactjs.firebaseapp.com",
  databaseURL: "https://tugas-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tugas-reactjs",
  storageBucket: "tugas-reactjs.appspot.com",
  messagingSenderId: "972660271186",
  appId: "1:972660271186:web:5d2379a2d48dbb9f8c578b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app