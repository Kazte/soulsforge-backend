import { AuthResult } from '../dto/auth-result';
import { encrypt, verify } from '../handlers/bcrypt.handler';
import { generateToken, verifyToken as vt } from '../handlers/jwt.handler';
import { Auth } from '../interfaces/auth.interface';
import { User, UserModel } from '../models/user.model';

const registerNewUserSerivice = async ({ email, password, username }: User) => {
	const checkIfExistsEmail = await UserModel.findOne({ email });

	if (checkIfExistsEmail) {
		return {
			result: false,
			message: 'Email already used',
			data: null,
		};
	}

	const checkIfExistsUsername = await UserModel.findOne({ username });

	if (checkIfExistsUsername) {
		return {
			result: false,
			message: 'Username already used',
			data: null,
		};
	}

	const passwordHash = await encrypt(password);

	const registerNewUser = await UserModel.create({ email, password: passwordHash, username });

	return {
		result: true,
		message: 'User created',
		data: registerNewUser,
	};
};

const loginUserService = async ({ email, password }: Auth) => {
	const user = await UserModel.findOne({ email });

	if (!user) {
		return null;
	}

	const isMatch = await verify(password, user.password);

	if (!isMatch) {
		return null;
	}

	const token = await generateToken(user.id);

	// add token to cokie

	return { user: { id: user.id, username: user.username, email: user.email }, token: token };

};

const verifyToken = (token: string): AuthResult => {
	const userToken = vt(token);

	if (userToken) {
		return {
			result: true,
			message: 'Valid token',
			data: userToken,
		};
	} else {
		return {
			result: false,
			message: 'Invalid token',
			data: null,
		};
	}
};



export { registerNewUserSerivice, loginUserService, verifyToken };
