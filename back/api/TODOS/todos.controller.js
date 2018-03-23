const TODOModel = require('./todos.model');
const _UPDATE_DEFAULT_CONFIG = {
    new: true,
    runValidators: true
}

module.exports = {
    getAllTODOs: getAllTODOs,
    getTODOById: getTODOById,
    deleteTODOById: deleteTODOById,
    createTODO: createTODO,
    updateTODO: updateTODO
}

function getAllTODOs(req, res) {
    TODOModel.find()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))

}
function getTODOById(req, res) {
    TODOModel.findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function deleteTODOById(req, res) {
    TODOModel.findById(req.params.id)
        .remove()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function createTODO(req, res) {
    TODOModel.create(req.body)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}
function updateTODO(req, res) {
    TODOModel.findByIdAndUpdate(req.params.id, req.body, _UPDATE_DEFAULT_CONFIG)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function handdleError(err, res){
    return res.status(400).json(err);
}