import { NextFunction, Request, Response } from 'express';
import { logInfo } from '../utilities/log.utility';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const stringBuilder = `${req.method} ${req.originalUrl} ${req.ip} ${req.get('user-agent')}`;

	logInfo(`${stringBuilder}`);
	next();
};

export { logMiddleware };