import { CustomResponse } from '../dto/response.dto';
import { getClaims } from '../handlers/jwt.handler';
import { CharacterEldenRing, CharacterEldenRingModel } from '../models/character-eldenring.model';
import { UserModel } from '../models/user.model';
import { log } from '../utilities/log.utility';

export const getCharacters = async (): Promise<CustomResponse> => {
	const response = await CharacterEldenRingModel.find().populate('user', 'username');

	return {
		result: true,
		data: response
	};
};

export const getCharacter = async (id: string) => {
	const response = await CharacterEldenRingModel.findById(id).populate('user', 'username');

	if (response === null) {
		return { message: 'Character not found', result: false, data: null };
	}

	return {
		result: true,
		data: response
	};
};

export const getCaractersByUser = async (id: string) => {
	const response = await CharacterEldenRingModel.find({ user: id });

	if (!response) {
		return { message: 'User not found', result: false, data: null };
	}

	return { message: '', result: true, data: response };
};

export const insertCharacter = async (item: CharacterEldenRing) => {
	log(item.user)
	const user = await UserModel.findById({ _id: item.user });

	if (!user) {
		return { result: false, message: 'User not found' };
	}


	item.imageUrl = item.imageUrl === '' ? 'https://placehold.co/400?text=No%20Image%20Yet' : item.imageUrl;
	item.description = item.description === '' ? 'This is a character from Elden Ring. There\'s no description yet but it will be added soon.' : item.description;


	const responseInsert = await CharacterEldenRingModel.create(item);

	if (!responseInsert) {
		return { result: false, message: 'Error inserting character' };
	}

	user.characters_eldenRing.push(responseInsert._id);
	user.save();

	return {
		result: true,
		message: '',
		data: responseInsert,
	};
};

export const updateCharacter = async (id: string, item: CharacterEldenRing) => {
	item.imageUrl = item.imageUrl === '' ? 'https://placehold.co/400?text=No%20Image%20Yet' : item.imageUrl;
	item.description = item.description === '' ? 'This is a character from Elden Ring. There\'s no description yet but it will be added soon.' : item.description;

	const responseItem = await CharacterEldenRingModel.findByIdAndUpdate(
		{
			_id: id
		},
		item,
		{
			new: true,
		});

	if (!responseItem) {
		return { result: false, message: 'Error updating character', data: null };
	}

	return { result: true, message: '', data: responseItem };
}

export const deleteCharacter = async (id: string, token: string) => {



	let responseItem = await CharacterEldenRingModel.findById(id);

	if (!responseItem) {
		return { result: false, message: 'Error deleting character' };
	}

	const claims = getClaims(token);

	if (claims?.id !== responseItem?.user.toString()) {
		return { result: false, message: 'You are not allowed to delete this character' };
	}

	responseItem = await CharacterEldenRingModel.findByIdAndDelete(id);

	const user = await UserModel.findOne({ _id: responseItem?.user });


	if (!user) {
		return { result: false, message: 'User not found' };
	}

	user.characters_eldenRing = user.characters_eldenRing.filter(item => item.toString() !== id);
	user.save();

	return { result: true, message: '', data: responseItem };


}
