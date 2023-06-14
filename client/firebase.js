import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Configura tu objeto de configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBy5tK3QMfWxmoWB3awnVOXckfs5mVm9ds',
  authDomain: 'heyandesdemo.firebaseapp.com',
  projectId: 'heyandesdemo',
  storageBucket: "heyandesdemo.appspot.com",
  messagingSenderId: "818242989224",
  appId: "1:818242989224:web:0c372126d4d0390660a69d",
  measurementId: "G-QYDD4F73D8"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtiene una instancia de Firestore
const db = firebase.firestore();

export default db;