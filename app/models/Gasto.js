const mongoose = require('mongoose')

const GastoSchema = new mongoose.Schema(
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
        valor: {
            type: Number,
            required: true,
        },
        cantidad: {
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

module.exports = mongoose.model('Gasto', GastoSchema)
