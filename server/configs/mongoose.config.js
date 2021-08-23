const mongoose = require('mongoose')
const uri = "mongodb+srv://timz:pEj5toVxx4ZHLBsD@cluster0.zkdrf.mongodb.net/trainingPlatform?retryWrites=true&w=majority"
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose