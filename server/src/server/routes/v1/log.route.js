import express from 'express';
import validate from "../../middlewares/validate.js";
import auth from "../../middlewares/auth.js";
import logValidation from '../../validations/log.validation.js';
import { createLog, getLog, getLogs, getLogByUser, updateLog, deleteLog } from '../../controllers/log.controller.js';

const router = express.Router();


router.route('/')
    .post(auth('manageLogs'), validate(logValidation.createLog), createLog)
    .get(auth('getLogs'), validate(logValidation.getLogs), getLogs);

router.route('/:logId')
    .get(auth('getLogs'), validate(logValidation.getLog), getLog)
    .patch(auth('manageLogs'), validate(logValidation.updateLog), updateLog)
    .delete(auth('manageLogs'), validate(logValidation.deleteLog), deleteLog);

router.route('/user/:userId')
    .get(auth('getLogs'), validate(logValidation.getLogByUser), getLogByUser);


export default router;