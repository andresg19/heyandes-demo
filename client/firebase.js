import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Configura tu objeto de configuración de Firebase
const firebaseConfig = {
  apiKey: `${import.meta.env.API_KEY}`,
  authDomain: `${import.meta.env.DOMAIN}`,
  projectId: 'heyandesdemo',
  storageBucket: `${import.meta.env.STORAGE}`,
  messagingSenderId: `${import.meta.env.MESSAGE}`,
  appId: `${import.meta.env.APP_ID}`,
  measurementId: `${import.meta.env.MEASURE_ID}`,
};


// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtiene una instancia de Firestore
const db = firebase.firestore();

export default db;