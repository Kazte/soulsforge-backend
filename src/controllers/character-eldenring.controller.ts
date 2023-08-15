import { getCaractersByUser } from './../services/character-eldenring.service';
import { handleHttpError } from '../handlers/error.handler';
import { getCharacter, getCharacters, insertCharacter } from '../services/character-eldenring.service';
import { ICharacterController } from './../interfaces/character-controller.interface';
import { Request, Response } from 'express';
import { getClaims } from '../handlers/jwt.handler';
import { ExtendedRequest } from '../interfaces/extended-request.interface';


export class CharacterEldenRingController implements ICharacterController {
	async getCharacter(req: Request, res: Response): Promise<void> {
		try {
			const id = req.params.id;
			const response = await getCharacter(id);
			res.send(response);
		} catch (e: any) {
			handleHttpError('ERROR_GET_ITEMS', res, e.message);
		}
	}

	async getCharacters(req: Request, res: Response): Promise<void> {
		try {
			const response = await getCharacters();
			res.send(response);
		} catch (e: any) {
			handleHttpError('ERROR_GET_ITEMS', res, e.message);
		}
	}

	async getCharactersByUser(req: Request, res: Response): Promise<void> {
		try {
			const id = req.params.id;
			const response = await getCaractersByUser(id);

			if (!response.result) {
				res.status(404).send(response);
			}

			res.send(response);
		} catch (e: any) {
			handleHttpError('ERROR_GET_ITEMS', res, e.message);
		}
	}

	updateCharacter(req: Request, res: Response): void {
		throw new Error('Method not implemented.');
	}

	patchCharacter(req: Request, res: Response): void {
		throw new Error('Method not implemented.');
	}

	async createCharacter(req: Request, res: Response): Promise<void> {
		try {
			const response = await insertCharacter(req.body);
			res.send(response);
		} catch (e: any) {
			handleHttpError('ERROR_CREATE_ITEM', res, e.message);
		}
	}

	deleteCharacter(req: Request, res: Response): void {
		throw new Error('Method not implemented.');
	}
}
