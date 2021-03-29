import firebase from "firebase";
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpxJ80HopNEJJL0fBRAHrOALhx98Du1-k",
  authDomain: "clone-222b9.firebaseapp.com",
  projectId: "clone-222b9",
  storageBucket: "clone-222b9.appspot.com",
  messagingSenderId: "79856796553",
  appId: "1:79856796553:web:73b3b18249c07ce4401758",
  measurementId: "G-2NW2P2GWJM"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};