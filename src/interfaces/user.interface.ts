import { Auth } from './auth.interface';

export interface User extends Auth {
	username: string;
}