import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyBWcwLuzTPqaLjtkRPBmHTW2thw0KGDtqM",
  authDomain: "hekathone.firebaseapp.com",
  databaseURL: "https://hekathone.firebaseio.com",
  projectId: "hekathone",
  storageBucket: "hekathone.appspot.com",
  messagingSenderId: "431796172165",
  appId: "1:431796172165:web:ffa1dd52331df3756640ec",
  measurementId: "G-E6BT7W7S3Y"
};
  // Initialize Firebase
  const FirebaseApp = firebase.initializeApp(firebaseConfig);
  export default FirebaseApp;
