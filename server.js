const mongoose = require('mongoose');
require('dotenv').config();  

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

mongoose.connect(process.env.MONGO_URI  )
  .then(() => console.log('MongoDB connecté avec succès'))
  .catch(err => console.log('Erreur de connexion à MongoDB:', err));




  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

});