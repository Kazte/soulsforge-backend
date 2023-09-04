import { UserModel } from '../models/user.model';
import { log } from '../utilities/log.utility';

export const getProfileService = async (id: string) => {
	const response = await UserModel.findById(id).populate('characters_eldenRing');

	if (!response) {
		return {
			result: null,
			message: 'Profile not found',
			data: null
		};
	}

	return {
		result: true,
		message: '',
		data: {
			_id: response._id,
			username: response.username,
			email: response.email,
			characters_eldenRing: response.characters_eldenRing
		}
	};
};

export const getProfileByUsernameService = async (username: string) => {
	log(username)
	const response = await UserModel.findOne({ username }).populate('characters_eldenRing');

	if (!response) {
		return {
			result: null,
			message: 'Profile not found',
			data: null
		};
	}

	return {
		result: true,
		message: '',
		data: {
			_id: response._id,
			username: response.username,
			email: response.email,
			characters_eldenRing: response.characters_eldenRing
		}
	};
}
