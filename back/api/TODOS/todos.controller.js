const fs = require('fs');
const { yesNiggasAsync, yesNiggasSync, getID } = require('./../../utils/functions')
const TODOModel = require('./todos.model');

module.exports = {
    getAllTODOs: getAllTODOs,
    getTODOById: getTODOById,
    deleteTODOById: deleteTODOById,
    updateTODO: updateTODO,
    createTODO: createTODO
}

function getAllTODOs(req, res) {
    TODOModel.find()
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(err => {
            res.json(err);
        })

}
function getTODOById(req, res) {
    TODOModel.findById(req.params.id)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err);
        })
}

function deleteTODOById(req, res) {
    TODOModel.findById(req.params.id)
        .remove()
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err);
        })
}

function createTODO(req, res) {
    TODOModel.create(req.body)
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        });












    // yesNiggasAsync(req.body)
    //     .then(hasNigga => {
    //         if (hasNigga) {
    //             return res.status(400).send('Oye, que no me mola que pongas nigga en el texto');
    //         }
    //         const newTODO = {
    //             text: req.body.text,
    //             createdAt: Date.now(),
    //             id: getID(),
    //             isCompleted: false
    //         }
    //         todos.push(newTODO);
    //         res.json(newTODO);
    //         actualizarFichero();
    //     })
}
function updateTODO(req, res) {
    TODOModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new : true,
        runValidators : true,

    })
        .then((udpdateD) => {
            res.json(udpdateD);
        })
        .catch(err => {
            res.json(err);
        })


}