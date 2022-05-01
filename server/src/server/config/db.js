import mongoose from 'mongoose'
import chalk from 'chalk'
import { envTypes } from './envTypes.js'

let DB_URL

switch (process.env.NODE_ENV) {
    case envTypes.DEVELOPMENT:
        DB_URL = process.env.DB_URL_DEV
        break;
    case envTypes.TESTING:
        DB_URL = process.env.DB_URL_TEST
        break;
    case envTypes.PRODUCTION:
        DB_URL = process.env.DB_URL_PROD
        break;
    case envTypes.LOCAL:
        DB_URL = process.env.DB_URL_LOCAL
        break;
    default:
        DB_URL = process.env.DB_URL_DEV
        break;
}

async function DB(){
    console.log(chalk.blue('Connecting to DB...'))
    return mongoose.connect(DB_URL)
}

export default DB