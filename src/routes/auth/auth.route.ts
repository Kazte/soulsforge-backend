import { Router } from 'express';
import { loginController, registerController, verifyController } from '../../controllers/auth.controller';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/verify', verifyController);
export default router;