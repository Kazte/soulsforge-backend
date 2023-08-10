import { NextFunction, Response } from 'express';
import { verifyToken } from '../handlers/jwt.handler';
import { ExtendedRequest } from '../interfaces/extended-request.interface';



function checkJwt(req: ExtendedRequest, res: Response, next: NextFunction) {
	try {
		const jwtUser = req.headers.authorization || '';
		const jwt = jwtUser.split(' ').pop();

		const userToken = verifyToken(`${jwt}`);



		if (userToken) {
			req.user = userToken;
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