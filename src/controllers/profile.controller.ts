import { Request, Response } from 'express';
import { handleHttpError } from '../handlers/error.handler';
import { getProfileByUsernameService, getProfileService } from '../services/profile.service';
import { log } from '../utilities/log.utility';

export const getProfile = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const response = await getProfileService(id);

		if (!response.result) {
			res.status(404).send(response);
		}

		res.send(response);
	} catch (error: any) {
		handleHttpError(error.message, res);
	}
};

export const getProfileByUsername = async (req: Request, res: Response) => {
	try {
		const username = req.params.username;
		const response = await getProfileByUsernameService(username);

		if (!response.result) {
			res.status(404).send(response);
		}

		res.send(response);

	} catch (error: any) {
		handleHttpError(error.message, res);
	}
};
