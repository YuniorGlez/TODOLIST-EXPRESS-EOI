const fs = require('fs');
const { yesNiggasAsync, yesNiggasSync, getID} = require('./../../utils/functions')
const todos = cargarTODOs();

module.exports = {
    getAllTODOs: getAllTODOs,
    getTODOById: getTODOById,
    deleteTODOById: deleteTODOById,
    updateTODO: updateTODO,
    createTODO: createTODO
}

function getAllTODOs(req, res) {
    const results = todos;
    console.log('YO SOY EL ULTIMO');
    if (req.query.order === 'asc') {
        results = results.sort();
    }
    if (req.query.order === 'desc') {
        results = results.sort(-1);
    }
    res.json(results);
}

function getTODOById(req, res) {
    const id = req.params.id;
    const result = todos.find(todo => todo.id == id);
    res.json(result);
}

function deleteTODOById(req, res) {
    const id = req.params.id;
    todos = todos.filter(filtro => filtro.id != id);
    res.json(result);
    actualizarFichero();
}

function createTODO(req, res) {
    yesNiggasAsync(req.body)
        .then(hasNigga => {
            if (hasNigga) {
                return res.status(400).send('Oye, que no me mola que pongas nigga en el texto');
            }
            const newTODO = {
                text: req.body.text,
                createdAt: Date.now(),
                id: getID(),
                isCompleted: false
            }
            todos.push(newTODO);
            res.json(newTODO);
            actualizarFichero();
        })
}
function updateTODO(req, res) {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);
    if (req.body.text && !yesNiggasSync(req.body.text.length)) {
        todo.text = req.body.text;
    }
    if (typeof req.body.isCompleted != undefined) {
        todo.isCompleted = req.body.isCompleted;
    }
    res.send('Updated');
    actualizarFichero();
}

function cargarTODOs(){
    return JSON.parse(fs.readFileSync(__dirname + '/../../data/todos.json'))
}

function actualizarFichero(){
    fs.writeFile(__dirname + '/../../data/todos.json', JSON.stringify(todos));
    
}