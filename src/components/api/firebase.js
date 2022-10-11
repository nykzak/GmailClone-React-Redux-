import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCDXRsBtDeIHdxt3ZV-Q7lLoUylveWT3kU",
  authDomain: "clone-edbb0.firebaseapp.com",
  projectId: "clone-edbb0",
  storageBucket: "clone-edbb0.appspot.com",
  messagingSenderId: "950349095297",
  appId: "1:950349095297:web:a9ae45e91a1d98118cc880",
  measurementId: "G-SQZQSX4YS2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};


