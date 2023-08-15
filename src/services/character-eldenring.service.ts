import { CharacterEldenRing } from '../interfaces/character-eldenring.interface';
import { CharacterEldenRingModel } from '../models/character-eldenring.model';
import { UserModel } from '../models/user.model';

export const getCharacters = async () => {
	const response = await CharacterEldenRingModel.find().populate('user', 'username');

	return response;
};

export const getCharacter = async (id: string) => {
	const response = await CharacterEldenRingModel.findById(id).populate('user', 'username');
	return response;
};

export const getCaractersByUser = async (id: string) => {
	const response = await CharacterEldenRingModel.find({ user: id });

	if (!response) {
		return { message: 'User not found', result: false, data: null };
	}

	return { message: '', result: true, data: response };
};

export const insertCharacter = async (item: CharacterEldenRing) => {
	const user = await UserModel.findById({ _id: item.user });

	if (!user) {
		return { message: 'User not found' };
	}


	const responseInsert = await CharacterEldenRingModel.create(item);

	if (!responseInsert) {
		return { message: 'Error inserting character' };
	}

	user.characters_eldenRing.push(responseInsert);
	user.save();

	return responseInsert;
};


