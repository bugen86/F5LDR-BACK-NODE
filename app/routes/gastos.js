const router = require('express').Router()
const productoController = require('../controllers/Producto')
const buscarProducto = require('../middleware/buscarProducto')

router.get('/', productoController.index)
router.post('/', productoController.crear)
router.get('/:key/:value', buscarProducto, productoController.buscar)

module.exports = router
