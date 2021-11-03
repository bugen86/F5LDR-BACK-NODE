const ProductoModel = require('../models/Producto')

const index = (req, res) => {
    ProductoModel.find({})
        .then((producto) => {
            if (producto.length) return res.status(200).send(producto)
            return res.status(204).send({ Content: 'No hay nada para mostrar' })
        })
        .catch((error) => res.status(500).send(error))
}

const crear = (req, res) => {
    let producto = new ProductoModel(req.body)
    producto.save().then((producto) => res.status(201).send(producto))
}

const buscar = (req, res) => {}
module.exports = {
    index,
    crear,
    buscar,
}
