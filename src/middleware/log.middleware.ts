import { NextFunction, Request, Response } from 'express';
import { logInfo } from '../utilities/log.utility';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
	res.on('finish', function () {
		logInfo(`[${new Date().toLocaleString()}] ${req.originalUrl} ${req.method} (${res.statusCode})`);
	});
	next();
};

export { logMiddleware };