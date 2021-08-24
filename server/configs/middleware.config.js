const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

//Allowing express.js to parse json data
module.exports = app => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
}





