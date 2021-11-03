const router = require('express').Router()
const ventasController = require('../controllers/Ventas')

router.post('/', ventasController.venta)
router.get('/', ventasController.mostrar)

module.exports = router
