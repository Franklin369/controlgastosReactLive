import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';
import { FaBalanceScaleRight } from 'react-icons/fa';
var firebaseConfig = {
  apiKey: "AIzaSyC7UbH02tyV0YHCy3CTiweQI9gP9YnNJ84",
  authDomain: "controlfinanzas-e3cbb.firebaseapp.com",
  projectId: "controlfinanzas-e3cbb",
  storageBucket: "controlfinanzas-e3cbb.appspot.com",
  messagingSenderId: "541491480373",
  appId: "1:541491480373:web:8a30a9335bb83795226e7c"
  };

  // Initialize Firebase
// const fb = firebase.initializeApp(firebaseConfig);
// export const db= fb.firestore();

const app = firebase.initializeApp(firebaseConfig);
export const db= app.firestore();
export const auth = getAuth(app)