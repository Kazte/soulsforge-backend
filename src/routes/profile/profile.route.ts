import { Router } from 'express';
import { getProfile, getProfileByUsername } from '../../controllers/profile.controller';

const router = Router();

router.get('/:id', getProfile);
router.get('/username/:username', getProfileByUsername)

export default router;
