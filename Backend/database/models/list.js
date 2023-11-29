const mongoose = require('mongoose'); //Importamos mongoose

//Creo esquema
const ListSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        minlength: 3
    },
});

const List = mongoose.model('List', ListSchema);

module.exports = List;


