const router = require('express').Router()
const productoController = require('../controllers/Producto')

//Endpoint para acceder a todos los productos para control de stock
router.get('/', productoController.index)

//Endpoint para buscar un producto en particular A DESARROLLAR
router.get('/:key/:value', productoController.buscar)

//Endpoint para guardar una venta
router.post('/', productoController.crear)

module.exports = router
