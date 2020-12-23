import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAoAfbtGI1XM2D53nTxZzFUH7I2vpDXfDw",
    authDomain: "simple-crud-react-941eb.firebaseapp.com",
    projectId: "simple-crud-react-941eb",
    storageBucket: "simple-crud-react-941eb.appspot.com",
    messagingSenderId: "746885795302",
    appId: "1:746885795302:web:e032f05e18bdb1eb661a27",
    measurementId: "G-Q23VXR9XLH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  export const database = firebase.database();

  export default firebase;