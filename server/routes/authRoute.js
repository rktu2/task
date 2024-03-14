import express from 'express';
import { registerController,loginController } from '../controllers/authController.js';

const router = express.Router();
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
	// store: ... , // Use an external store for consistency across multiple server instances.
})


//router

router.post('/register',limiter,registerController);
router.post('/login', limiter,loginController);

export default router;