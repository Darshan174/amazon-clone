// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDGDcpHARpp8Hr3GH6SYEdpQrsqoIu2J20",
    authDomain: "clone-efcd7.firebaseapp.com",
    projectId: "clone-efcd7",
    storageBucket: "clone-efcd7.appspot.com",
    messagingSenderId: "900708899368",
    appId: "1:900708899368:web:49e284fdd6ebd164cb331d",
    measurementId: "G-6WQ1BJXHRV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };




