const mongoose = require('mongoose')

const Productschema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        enum: ['cervezas', 'gaseogas', 'snaks'],
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
})

const Producto = mongoose.model('Producto', Productschema)

module.exports = Producto
