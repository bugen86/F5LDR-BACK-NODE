const mongoose = require('mongoose')
const CONFIG = require('./config')

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection
        return mongoose
            .connect(CONFIG.DB)
            .then((connection) => {
                this.connection = connection
                console.log(`Conectado a la Base de Datos...`)
            })
            .catch((error) => console.log)
    },
}
