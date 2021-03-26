  
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGHnlKiqJ4DzoyxbAbVvJ3oa_1IlIePp8",
  authDomain: "whatsapp-clone-b8b2e.firebaseapp.com",
  projectId: "whatsapp-clone-b8b2e",
  storageBucket: "whatsapp-clone-b8b2e.appspot.com",
  messagingSenderId: "662768906058",
  appId: "1:662768906058:web:aae3eea1904430aa2bdbb3",
  measurementId: "G-FRTEVBFS0Q"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;