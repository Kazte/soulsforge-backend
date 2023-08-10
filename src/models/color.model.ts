import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		}
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const UserModel = model('users', UserSchema); // collection name, schema