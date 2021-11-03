const DataBase = require('./App/config/database')
const CONFIG = require('./App/config/config')
const App = require('./App/app')

DataBase.connect()

App.listen(CONFIG.PORT, (error) => {
    if (error) return console.log(error)
    console.log(`Servidor corriendo correctamente en el puerto : ${CONFIG.PORT}`)
})
