const Router = require('express')
const router = new Router()
const cardGroupController = require('../controllers/cardGroupController')


router.post('/', cardGroupController.create)
router.get('/', cardGroupController.getAll)

module.exports = router