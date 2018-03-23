const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

// Conectamos mongoose con nuestra db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist');

// Usamos middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

const todosRouter = require('./api/TODOS');
app.use('/api/todos', todosRouter);

app.listen(5000, (err) => {
    console.log('Servidor listo en el puerto 5000');
})