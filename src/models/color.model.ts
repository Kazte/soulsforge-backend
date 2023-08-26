import { InferSchemaType, Schema, model } from 'mongoose';

const UserSchema = new Schema(
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

export type User = InferSchemaType<typeof UserSchema>;

export const UserModel = model('users', UserSchema); // collection name, schema
