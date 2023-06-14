const { Router } = require("express");
const admin = require('firebase-admin');
require('dotenv').config();

const router = Router();

/* SDK FIREBASE */
const serviceAccount = require('../../firebase/serviceAccount.json'); // Ruta al archivo JSON de tu cuenta de servicio
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
 
});
/* ------------ */

router.get('/', async (req, res) => {
  try {
    const db = admin.firestore();
    const collectionRef = db.collection('sales-andes'); // Reemplaza 'data' con el nombre de tu colección en Firestore

    const snapshot = await collectionRef.get();
    const data = [];

    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    res.json(data);
  } catch (error) {
    console.error('Error al obtener los datos de Firestore:', error);
    res.status(500).send('Error al obtener los datos de Firestore.');
  }
});


  module.exports = router;