const mongoose = require('mongoose')

const VentaSchema = new mongoose.Schema(
    {
        productos: [
            {
                idProducto: {
                    type: String,
                    required: true,
                },
                cantidad: {
                    type: Number,
                    required: true,
                },
                valor: {
                    type: Number,
                    required: true,
                },
            },
        ],
        fecha: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        timestamps: true,
        versionKey: false,
        autoIndex: false,
    }
)

module.exports = mongoose.model('Venta', VentaSchema)
