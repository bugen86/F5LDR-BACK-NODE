const VentaModel = require('../models/Venta')

const venta = (req, res) => {
    let venta = new VentaModel(req.body)
    venta.save().then((venta) => res.status(201).send(venta))
}

const mostrar = (_, res) => {
    VentaModel.find({}).then((ventas) => res.send(ventas))
}

module.exports = {
    venta,
    mostrar,
}
