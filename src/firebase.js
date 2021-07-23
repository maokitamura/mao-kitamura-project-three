import firebase from 'firebase/app';
import 'firebase/database';

  
const firebaseConfig = {
    apiKey: "AIzaSyDzMkk_gbfOPDF0r4DyQRLOmO-UQgtYG0Y",
    authDomain: "project3-a301e.firebaseapp.com",
    databaseURL: "https://project3-a301e-default-rtdb.firebaseio.com",
    projectId: "project3-a301e",
    storageBucket: "project3-a301e.appspot.com",
    messagingSenderId: "338235818251",
    appId: "1:338235818251:web:8e2e66ff05774e62c4a20e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;