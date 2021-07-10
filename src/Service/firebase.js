import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: 'AIzaSyBTaOEnFyP-BZxmcDE6NHx5dk0gQ-d8UX8',
  authDomain: 'react-todo-an.firebaseapp.com',
  projectId: 'react-todo-an',
  storageBucket: 'react-todo-an.appspot.com',
  messagingSenderId: '550422368632',
  appId: '1:550422368632:web:5351813464bcbe2c9cb88d',
  measurementId: 'G-P6V9D5G5LB',
});

firebase.analytics();
const db = firebaseApp.firestore();

export default db;
