const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const todosRouter = require('./api/TODOS');
// const todos = JSON.parse(fs.readFileSync('data/todos.json'));




app.use(express.json());
app.use(cors());
app.use( (req, res, next) => {
    console.log(`Yo me ejecuto primero`);
    req.invalidUser = true;
    next();
})
app.use( (req, res, next) => {
    console.log(`Y luego yo`);
    if (req.invalidUser) return res.sendStatus(401)
    else    next()
})
// app.use('/api/users', usersRouter);
app.use('/api/todos', todosRouter);

app.listen(5000, (err) => {
    console.log('Servidor listo en el puerto 5000');
})



const functions = require('./utils/functions');
















