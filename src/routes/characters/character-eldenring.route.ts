import { Router } from 'express';
import { ICharacterController } from '../../interfaces/character-controller.interface';
import { CharacterEldenRingController } from '../../controllers/character-eldenring.controller';
import { checkJwt } from '../../middleware/session.middleware';

const router = Router();

const controller: ICharacterController = new CharacterEldenRingController();

router.get('/', controller.getCharacters);
router.get('/:id', controller.getCharacter);
router.get('/byUser/:id', controller.getCharactersByUser);
router.put('/:id', checkJwt, controller.updateCharacter);
router.post('/', checkJwt, controller.createCharacter);
router.delete('/:id', controller.deleteCharacter);

export default router;