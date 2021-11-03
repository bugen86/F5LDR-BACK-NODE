const express = require('express')
const cors = require('cors')

const App = express()

/* Rutas */
const rutaProductos = require('./routes/productos')
const rutaVentas = require('./routes/ventas')

App.use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors())

    .use('/productos', rutaProductos)
    .use('/ventas', rutaVentas)
//.use('/gastos', rutaGastos)

module.exports = App
