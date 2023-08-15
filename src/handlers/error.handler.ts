import { Response } from 'express';
import { logError } from '../utilities/log.utility';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleHttpError = (err: string, res: Response, errorRaw?: any) => {
	console.log(errorRaw);
	res.status(500);
	res.send({ message: err });
};

export { handleHttpError };