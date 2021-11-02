module.exports = {
    PORT: process.env.PORT || 3000,
    DB:
        process.env.DB ||
        'mongodb+srv://f5ldr:rammoa86@f5ldr.ciknc.mongodb.net/f5ldrProductos?retryWrites=true&w=majority',
}
