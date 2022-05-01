import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import xss from 'xss-clean';
import compression from 'compression';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import httpStatus from 'http-status';





const app = express()

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

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













export default app