const router = require('express').Router()
const productoController = require('../controllers/Producto')
const buscarProducto = require('../middleware/buscarProducto')

//Endpoint para acceder a todos los productos para control de stock
router.get('/', productoController.index)

//Endpoint para buscar un producto en particular A DESARROLLAR
router.get('/:key/:value', buscarProducto, productoController.buscar)

//Endpoint para guardar una venta
router.post('/', productoController.crear)

module.exports = router
