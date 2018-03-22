
const router = require('express').Router();
const { yesNiggasAsync , getID } = require('./../../utils/functions');

module.exports = router;

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



router.get('/', (req, res) => {
    const results = todos;
    console.log('YO SOY EL ULTIMO');
    if ( req.query.order === 'asc'){
        results = results.sort();
    }
    if ( req.query.order === 'desc'){
        results = results.sort(-1);
    }
    res.json(results);
})
// Poder obtener un todo por su id 
router.get('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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
router.post('/', (req, res) => {
    yesNiggasAsync(req.body)
        .then( hasNigga => {

        if (hasNigga ) {

        console.log('Yo fui luego')
            return res.status(400).send('Oye, que no me mola que pongas nigga en el texto');
        }
        const newTODO = {
            text : req.body.text,
            createdAt : Date.now(),
            id : getID(),
            isCompleted : false
        }
        todos.push(newTODO);
        res.json(newTODO);
})
    console.log('Yo fui primero')
});
router.patch('/:id' , (req, res) => {
    const id = req.params.id;
    const todo = todo.find( todo => todo.id === id);
    req.body = { text : 'texto', email : 'paoc@', edad : 20}

    if (req.body.text && !yesNiggasASync(req.body.text.length)) {
        todo.text = req.body.text;
    }
    if (req.body.email) {
        todo.email = req.body.email;
    }
    if (req.body.edad) {
        todo.edad = req.body.edad;
    }
})
