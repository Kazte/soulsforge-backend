import { encrypt, verify } from '../handlers/bcrypt.handler';
import { generateToken } from '../handlers/jwt.handler';
import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';

const registerNewUserSerivice = async ({ email, password, username }: User) => {
	const checkIfExists = await UserModel.findOne({ email });

	if (checkIfExists) {
		return null;
	}

	const passwordHash = await encrypt(password);

	const registerNewUser = await UserModel.create({ email, password: passwordHash, username });

	return registerNewUser;
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

	return { user: { id: user.id, username: user.username, email: user.email }, token: token };

};

export { registerNewUserSerivice, loginUserService };