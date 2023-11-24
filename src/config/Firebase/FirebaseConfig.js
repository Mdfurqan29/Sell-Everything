
 import {getAuth  } from 'firebase/auth'
 import {getDatabase  } from 'firebase/database'
 import { initializeApp } from "firebase/app";
 import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCnEvRRKS4Hun4DHc9vQYSsCsR-RKKHTsQ",
  authDomain: "routing-practice-1.firebaseapp.com",
  projectId: "routing-practice-1",
  storageBucket: "routing-practice-1.appspot.com",
  messagingSenderId: "27446357771",
  appId: "1:27446357771:web:011a5ef46c486ccde67c0e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const DATABASE = getDatabase(app)
const STORAGE = getStorage(app)


export {
    auth,
    DATABASE,
    STORAGE
}