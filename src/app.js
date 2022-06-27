const express =  require('express')
const morgan  = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

// import middlewares
const notFound = require('./middleware/notFound')

const app = express()
// Setup logging, cors, security headers and body parser
app.use(morgan(':method :url :status :response-time ms'))
app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello From Express'
  })
})

// When no above urls match
app.use(notFound)

module.exports = app