import { Response } from 'express';
import { handleHttpError } from '../handlers/error.handler';
import { ExtendedRequest } from '../interfaces/extended-request.interface';


const getOrders = async (req: ExtendedRequest, res: Response) => {
	try {
		res.send({ data: 'TEST SESSION JWT', user: req.user });
	} catch (e) {
		handleHttpError('ERROR_GET_ORDERS', res);
	}
};

export { getOrders };