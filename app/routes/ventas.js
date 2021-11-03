const router = require('express').Router()
const ventasController = require('../controllers/Ventas')

router.get('/', ventasController.index)

module.exports = router
