// For Firebase JS SDK v7.20.0 and later, measurementId is optional


//export default db;
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
  apiKey: "AIzaSyAkSzYJ2j6a6Lwxu5vbPFBbtPpX709YXak",
  authDomain: "instagram-clone-c64a0.firebaseapp.com",
  projectId: "instagram-clone-c64a0",
  storageBucket: "instagram-clone-c64a0.appspot.com",
  messagingSenderId: "268188850027",
  appId: "1:268188850027:web:d4d685b74576ae1c7f9e2e",
  measurementId: "G-RVR5P98SGC"


});

const db = firebaseApp.firestore(); 
const auth = firebase.auth();
const storage = firebase.storage();

export{db,auth,storage};