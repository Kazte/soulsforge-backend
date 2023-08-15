export const PasswordValidator = {

	validate(password: string): PasswordValidatorResult {
		const PASSWORD_MIN_LENGTH = 8;
		const PASSWORD_REGEX_UPPERCASE = new RegExp('^(?=.*[A-Z])(?!.*\\s).*$');
		const PASSWORD_REGEX_LOWERCASE = new RegExp('^(?=.*[a-z])(?!.*\\s).*$');
		const PASSWORD_REGEX_NUMBER = new RegExp('^(?=.*\\d)(?!.*\\s).*$');

		if (password.length < PASSWORD_MIN_LENGTH) {
			return {
				result: false,
				message: 'Password must be at least 8 characters long'
			};
		}

		if (!PASSWORD_REGEX_UPPERCASE.test(password)) {
			return {
				result: false,
				message: 'Password must contain at least one uppercase letter'
			};
		}

		if (!PASSWORD_REGEX_LOWERCASE.test(password)) {
			return {
				result: false,
				message: 'Password must contain at least one lowercase letter'
			};
		}

		if (!PASSWORD_REGEX_NUMBER.test(password)) {
			return {
				result: false,
				message: 'Password must contain at least one number'
			};
		}

		return {
			result: true,
			message: 'Password is valid'
		};
	},
};

export interface PasswordValidatorResult {
	result: boolean;
	message: string;
}