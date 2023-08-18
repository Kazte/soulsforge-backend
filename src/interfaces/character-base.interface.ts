import { User } from './user.interface';

export interface CharacterBase {
	name: string,
	user: User,
	description: string,
	imageUrl: string,
	game: CharacterGame,
}


export type CharacterGame = 'Elden Ring' | 'Dark Souls 3' | 'Dark Souls 2' | 'Dark Souls' | 'Bloodborne'