
const router = require('express').Router();
const { yesNiggasAsync , getID } = require('./../../utils/functions');
const { getAllTODOs, getTODOById, deleteTODOById, createTODO, updateTODO } = require ('./todos.controller');

router.get('/', getAllTODOs);
router.get('/:id', getTODOById);
router.delete('/:id', deleteTODOById)
router.post('/', createTODO);
router.patch('/:id' , updateTODO)

module.exports = router;