import { Request, Response } from 'express';
import { loginUserService, registerNewUserSerivice, verifyToken } from '../services/auth.service';
import { handleHttpError } from '../handlers/error.handler';
import { PasswordValidator } from '../use-cases/auth/password-validator';

export const registerController = async (req: Request, res: Response) => {
	try {
		const body = req.body;

		const password = body.password;

		const passwordValidation = PasswordValidator.validate(password);

		if (!passwordValidation.result) {
			res.status(400).json({
				result: false,
				message: passwordValidation.message,
				data: null,
			});
			return;
		}

		const responseUser = await registerNewUserSerivice(body);

		if (!responseUser.result) {
			res.status(400).json(responseUser);
			return;
		}

		res.status(201).json(responseUser);
	} catch (error: any) {
		handleHttpError(error.message, res);
	}
};

export const loginController = async (req: Request, res: Response) => {
	try {
		const body = req.body;

		const responseUser = await loginUserService(body);


		if (responseUser === null) {
			res.status(403).json({
				result: false,
				message: 'Invalid credentials',
				data: null,
			});
			return;
		}

		res.cookie('token', responseUser.token, {
			// httpOnly: true,
			sameSite: 'none',
		});


		res.status(201).json({
			result: true,
			message: 'Login successful',
			data: responseUser,
		});
	} catch (error: any) {
		handleHttpError(error.message, res);
	}
};

export const verifyController = async (req: Request, res: Response) => {
	// const token = req.body.token;


	const cookieToken = req.headers.authorization?.split(' ')[1];

	if (!cookieToken) {
		res.status(403).json({
			result: false,
			message: 'No token provided',
			data: null,
		});
		return;
	}

	const response = verifyToken(cookieToken);


	if (!response.result) {
		res.status(403).json(response);
		return;
	}

	res.status(200).json(response);

};
