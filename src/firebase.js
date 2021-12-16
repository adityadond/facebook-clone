import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyBMNaLLKpyfad1FmFyEFgpYMJ7ILxoy5vk",
    authDomain: "facebook-clone-b782f.firebaseapp.com",
    projectId: "facebook-clone-b782f",
    storageBucket: "facebook-clone-b782f.appspot.com",
    messagingSenderId: "880114950872",
    appId: "1:880114950872:web:2877c33235d211bb98adad",
    measurementId: "G-C8XDHHRCDD"
  });

 

const auth=firebase.auth();

export {auth}

