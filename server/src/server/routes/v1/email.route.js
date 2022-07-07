import { Router } from "express";
import emailController from "../../controllers/email.controller.js";


const router = Router();

router.post('/', emailController.sendContactEmail);


export default router;