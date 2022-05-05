import mongoose from 'mongoose'
import chalk from 'chalk'
import { DEVELOPMENT, TESTING, LOCAL, PRODUCTION } from './envTypes.js'

let DB_URL

switch (process.env.NODE_ENV) {
    case DEVELOPMENT:
        DB_URL = process.env.DB_URL_DEV
        break;
    case TESTING:
        DB_URL = process.env.DB_URL_TEST
        break;
    case PRODUCTION:
        DB_URL = process.env.DB_URL_PROD
        break;
    case LOCAL:
        DB_URL = process.env.DB_URL_LOCAL
        break;
    default:
        DB_URL = process.env.DB_URL_DEV
        break;
}

async function DB(){
    console.log(chalk.blue('Connecting to DB...'))
    return mongoose.connect(process.env.DB_URL_DEV)
}

export default DB