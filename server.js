const DataBase = require('./app/config/database')
const CONFIG = require('./app/config/config')
const App = require('./app/app')

DataBase.connect()

App.listen(CONFIG.PORT, (error) => {
    if (error) return console.log(error)
    console.log(`Servidor corriendo correctamente en el puerto : ${CONFIG.PORT}`)
})
