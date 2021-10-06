const Router = require('express').Router()
const productoController = require('../controllers/Producto')
const buscarProducto = require('../middleware/buscarProducto')

Router.get('/', productoController.index)
Router.post('/', productoController.crear)
Router.get('/:key/:value', buscarProducto, productoController.buscar)

module.exports = Router
