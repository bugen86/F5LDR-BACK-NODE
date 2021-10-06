const express = require('express')
const bodyParser = require('body-parser')

const App = express()

/* Rutas */
const RutaProductos = require('./routes/productos')
const RutaVentas = require('./routes/ventas')

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: false }))

App.use('/productos', RutaProductos)
App.use('/ventas', RutaVentas)

module.exports = App
