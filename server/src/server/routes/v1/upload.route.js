import express from 'express';
import { createImage } from '../../controllers/image.controller.js';


const router = express.Router();


router.post('/', createImage);


export default router;