import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcF14Ta3JbIKnMEqplcZJDpNNKfDUhXuI",
  authDomain: "recipe-realm-d8730.firebaseapp.com",
  projectId: "recipe-realm-d8730",
  storageBucket: "recipe-realm-d8730.appspot.com",
  messagingSenderId: "393988306348",
  appId: "1:393988306348:web:da6dcb61352cc3121af609",
  measurementId: "G-QTV1CBWSPH",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export default projectFirestore;
