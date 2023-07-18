import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyHqdAivCsdZusYUAbmOgdq_g_EJEBrXo",
    authDomain: "linkedin-clone-e5ade.firebaseapp.com",
    projectId: "linkedin-clone-e5ade",
    storageBucket: "linkedin-clone-e5ade.appspot.com",
    messagingSenderId: "489376028537",
    appId: "1:489376028537:web:2d9dbb90570964db3641a8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };