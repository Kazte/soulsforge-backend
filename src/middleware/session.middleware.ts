import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../handlers/jwt.handler';

function checkJwt(req: Request, res: Response, next: NextFunction) {
	try {
		const jwtUser = req.headers.authorization || '';
		const jwt = jwtUser.split(' ').pop();

		if (verifyToken(`${jwt}`)) {
			next();
		} else {
			res.status(401);
			res.send({
				message: 'Not valid token'
			});
		}
	} catch (error) {
		res.status(401);
		res.send({
			message: 'Not valid token'
		});
	}
}

export { checkJwt };