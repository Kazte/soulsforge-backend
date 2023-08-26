import { UserModel } from '../models/user.model';

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
		data: response
	};
};