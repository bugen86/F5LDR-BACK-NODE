const mongoose = require('mongoose')

const Productschema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        categoria: {
            type: String,
            enum: ['cervezas', 'gaseosas', 'snaks'],
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
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model('Producto', Productschema)
