import { Request, Response } from 'express';
import { ExtendedRequest } from './extended-request.interface';

export interface ICharacterController {
	getCharacter: (req: Request, res: Response) => void;
	getCharacters: (req: Request, res: Response) => void;
	getCharactersByUser: (req: ExtendedRequest, res: Response) => void;
	updateCharacter: (req: Request, res: Response) => void;
	createCharacter: (req: Request, res: Response) => void;
	deleteCharacter: (req: Request, res: Response) => void;
}