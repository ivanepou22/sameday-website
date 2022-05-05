import dotenv from 'dotenv'
import chalk from 'chalk'
import app from './server/app.js'
import DB  from './server/config/db.js';

dotenv.config()


const PORT = process.env.PORT || 5000;

DB().then(() => {
    app.listen(PORT, () => {
        console.log(chalk.blue(`Server is running on port ${PORT}`));
    });
});