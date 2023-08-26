import { Request, Response } from 'express';
import { handleHttpError } from '../handlers/error.handler';
import { getProfileService } from '../services/profile.service';

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
