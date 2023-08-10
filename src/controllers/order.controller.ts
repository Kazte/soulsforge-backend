import { Request, Response } from 'express';
import { handleHttpError } from '../handlers/error.handler';


const getOrders = async (req: Request, res: Response) => {
	try {
		res.send({ data: 'TEST SESSION JWT' });
	} catch (e) {
		handleHttpError('ERROR_GET_ORDERS', res);
	}
};

export { getOrders };