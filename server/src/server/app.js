const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const xss = require('xss-clean')
const compression = require('compression')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const mongoSanitize = require('express-mongo-sanitize')
const httpStatus = require('http-status')





const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(xss())
app.use(mongoSanitize())
app.use(compression())
app.use(cors())
app.options('*', cors())
app.use(cookieParser())
app.use(passport.initialize())













module.exports = app