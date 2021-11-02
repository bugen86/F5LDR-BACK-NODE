const Router = require('express').Router()
const ventasController = require('../controllers/Ventas')

Router.get('/', ventasController.index)

module.exports = Router
