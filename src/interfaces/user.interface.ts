import { Auth } from './auth.interface';
import { CharacterEldenRing } from './character-eldenring.interface';

export interface User extends Auth {
	username: string;
	characters_eldenRing: CharacterEldenRing[];
}