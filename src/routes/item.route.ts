import { Router } from 'express';
import { createCar, deleteCar, getCar, getCars, updateCar } from '../controllers/car.controller';

const router = Router();

router.get('/', getCars);
router.get('/:id', getCar);
router.put('/:id', updateCar);
router.post('/', createCar);
router.delete('/:id', deleteCar);

export { router };
