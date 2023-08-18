import { Router } from 'express';
import { getProfile } from '../../controllers/profile.controller';

const router = Router();

router.use('/:id', getProfile);

export default router;