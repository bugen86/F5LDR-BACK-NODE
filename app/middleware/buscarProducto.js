const productModel = require('../models/Producto')

const buscar = (req, res, next) => {
    let producto = new productModel(req.body)
    let key = req.params.key
    let value = req.params.value

    productModel
        .find({ key: value })
        .then((producto) => {
            if (!producto.length) return next()
            req.body.producto = producto
            return next()
        })
        .catch((error) => {
            req.body.error = error
            next()
        })
}

module.exports = buscar
