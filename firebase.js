import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBXZPxadqJhPsSzXoJ-bDYbH2Wa2aejcTA',
  authDomain: 'docs-clone-2ce88.firebaseapp.com',
  projectId: 'docs-clone-2ce88',
  storageBucket: 'docs-clone-2ce88.appspot.com',
  messagingSenderId: '972759390999',
  appId: '1:972759390999:web:6b47444de47eb1ff3af552',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
