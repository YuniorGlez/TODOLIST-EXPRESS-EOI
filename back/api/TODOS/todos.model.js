const mongoose = require('mongoose');

var TODOschema = mongoose.Schema({
    text: {
        type : String,
        required : [true , 'Tiiiio tienes que poner un texto'],
        minlength : [10 , 'Minimo ponme 10 caracteres ijupue..']
    },
    createdAt: Number,
    isCompleted: Boolean
} ,
    { versionKey : false}
);

var TODO = mongoose.model('todo', TODOschema);

module.exports = TODO;