const router = require('express').Router()
const Controller = require('../controllers/movie')

router.get('/', Controller.getData)
router.get('/:id', Controller.getOneData)
router.post('/', Controller.postData)
router.put('/:id', Controller.putData)
router.patch('/:id', Controller.patchData)
router.delete('/:id', Controller.deleteData)


module.exports = router