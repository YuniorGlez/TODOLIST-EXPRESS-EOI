const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
// const todos = JSON.parse(fs.readFileSync('data/todos.json'));

const todos = [

    {
        "id": 'y271yj',
        "text": 'Soy un todo precioso',
        "createdAt": Date.now(),
        "isCompleted": true
    },
    {
        "id": 'phx2pr',
        "text": 'Soy un todo precioso 3 ',
        "createdAt": (Date.now() - 100),
        "isCompleted": false
    
    }
    ];
app.use(express.json());
app.use(cors());

app.get('/api/todos/:idTODO', (req, res) => {
    console.log(req.query.order);
    console.log('Hola ? ')
    res.json(todos);
})

app.get('/api/todos', (req, res) => {
    const results = todos;
    if ( req.query.order === 'asc'){
        results = results.sort();
    }
    if ( req.query.order === 'desc'){
        results = results.sort(-1);
    }
    res.json(results);
})

// Poder obtener un todo por su id 

app.get('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    const result = todos.find(todo =>  todo.id == id);     
    // todos.forEach( todo => {
    //     if ( todo.id == id){
    //         result = todo;
    //     }
    // })
    res.json(result);
})

// Poder borrar un todo por su id 
app.delete('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter( filtro =>  filtro.id != id );

    // const posicion = todos.findIndex( filtro =>  filtro.id == id );
    // todos.splice(posicion,1);

    // todos.forEach( (todo, index) => {
    //     if ( todo.id == id){
    //         // es este esta aki 
    //         // borrar el que está ne la posicion index
    //         todos.splice(index,1);
    //     }
    // })

    res.json(result);
})

app.post('/api/todos', (req, res) => {
    if (hasNiggaInDaText(req.body)) {
        return res.status(400).send('Oye, que no me mola que pongas nigga en el texto');
    }
    const newTODO = {
        text : req.body.text,
        createdAt : Date.now(),
        id : getRandomID(),
        isCompleted : false
    }
    todos.push(newTODO);
    res.json(newTODO);
});

// Borrar a un todo en concreto 
app.delete('/api/todos/:id', (req, res) => {
    
})

app.patch('/api/todos/:id' , (req, res) => {

    const id = req.params.id;
    
    const todo = todo.find( todo => todo.id === id);

    req.body = { text : 'texto', email : 'paoc@', edad : 20}

    if (req.body.text && !hasNiggaInDaText(req.body.text.length)) {
        todo.text = req.body.text;
    }
    if (req.body.email) {
        todo.email = req.body.email;
    }
    if (req.body.edad) {
        todo.edad = req.body.edad;
    }





})

app.listen(5000, (err) => {
    console.error(err);
    console.log('Servidor listo en el puerto 5000');
})
function getRandomID() {
    return Math.random().toString(36).substring(7);
}
function hasNiggaInDaText(todo) {
    return todo.text.toLowerCase().includes('nigga');
}




