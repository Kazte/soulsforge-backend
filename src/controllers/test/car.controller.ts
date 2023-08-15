import { Request, Response } from 'express';
import { handleHttpError } from '../handlers/error.handler';
import { log } from '../utilities/log.utility';
import { deleteCarService, getCarService, getCarsService, insertCarService, updateCarService } from '../services/car.service';


const getCar = async (req: Request, res: Response) => {
	try {
		const response = await getCarService(req.params.id);
		res.send(response);
	} catch (e) {
		handleHttpError('ERROR_GET_ITEM', res);
	}
};

const getCars = async (req: Request, res: Response) => {
	try {
		const response = await getCarsService();
		res.send(response);
	} catch (e) {
		handleHttpError('ERROR_GET_ITEMS', res);
	}
};

const updateCar = async (req: Request, res: Response) => {
	try {
		const response = await updateCarService(req.params.id, req.body);
		res.send(response);
	} catch (e) {
		handleHttpError('ERROR_UPDATE_ITEM', res);
	}
};

const createCar = async (req: Request, res: Response) => {
	try {
		const responseItem = await insertCarService(req.body);
		res.send(responseItem);
	} catch (e) {
		log('ERROR_CREATE_ITEM');
		handleHttpError('ERROR_CREATE_ITEM', res, e);
	}
};

const deleteCar = async (req: Request, res: Response) => {
	try {
		const response = await deleteCarService(req.params.id);
		res.send(response);
	} catch (e) {
		handleHttpError('ERROR_DELETE_ITEM', res);
	}
};


export { getCar, getCars, updateCar, createCar, deleteCar };