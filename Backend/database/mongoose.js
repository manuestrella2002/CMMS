const mongoose = require('mongoose'); //Importo libreria de mongoose


mongoose.Promise = global.Promise; //Evito con esto que se frizze si tarda mucho en conectarse a la database

mongoose.connect('mongodb://127.0.0.1:27017/mantdb') //Accedo a la database que se llama "mantdb". 27071 es el puerto default de mongodb
        .then(()=>console.log("Database is connected"))               //Uso then porque arriba uso promise
        .catch((error)=> console.log(error));

module.exports = mongoose;



