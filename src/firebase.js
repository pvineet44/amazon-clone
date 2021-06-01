import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCswD5NC7krBRu6Ws4YiH8Ln_5tcIaua2M',
  authDomain: 'vp-emazon-clone.firebaseapp.com',
  projectId: 'vp-emazon-clone',
  storageBucket: 'vp-emazon-clone.appspot.com',
  messagingSenderId: '279946226368',
  appId: '1:279946226368:web:0f676b983d7ad758d9db25',
  measurementId: 'G-G5Q0PLRFED',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
