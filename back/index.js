const express = require('express');
const app = express();
const cors = require('cors');
const todosRouter = require('./api/TODOS');

app.use(express.json());
app.use(cors());

app.use('/api/todos', todosRouter);

app.listen(5000, (err) => {
    console.log('Servidor listo en el puerto 5000');
})