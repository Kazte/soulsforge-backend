import { Request, Response } from 'express';
import { loginUserService, registerNewUserSerivice } from '../services/auth.service';
import { handleHttpError } from '../handlers/error.handler';

const registerController = async (req: Request, res: Response) => {
	try {
		const body = req.body;

		const responseUser = await registerNewUserSerivice(body);

		if (responseUser === null) {
			res.status(400).json({
				message: 'User already exists',
			});
			return;
		}


		res.status(201).json(responseUser);
	} catch (error: any) {
		handleHttpError(error.message, res);
	}
};

const loginController = async (req: Request, res: Response) => {
	try {
		const body = req.body;

		const responseUser = await loginUserService(body);

		if (responseUser === null) {
			res.status(403).json({
				message: 'Invalid credentials',
			});
			return;
		}

		res.status(201).json(responseUser);
	} catch (error: any) {
		handleHttpError(error.message, res);
	}
};

export { registerController, loginController };