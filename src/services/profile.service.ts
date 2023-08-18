import { UserModel } from '../models/user.model';
import { log } from '../utilities/log.utility';

export const getProfileService = async (id: string) => {
	log(id);
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
		data: response
	};
};