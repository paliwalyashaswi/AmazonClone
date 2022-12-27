import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
apiKey: "AIzaSyDeMnJNfDLrU9tInBAK9aqJzzmTIN6W3AY",
authDomain: "clone-eb6e7.firebaseapp.com",
projectId: "clone-eb6e7",
storageBucket: "clone-eb6e7.appspot.com",
messagingSenderId: "857237477510",
appId: "1:857237477510:web:0348e96590f5c6c9189907",
measurementId: "G-SYZNXLMFVH"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };