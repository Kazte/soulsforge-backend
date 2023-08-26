import { CharacterEldenRing } from './character-eldenring.model';
import { Schema, Types, model, Model, InferSchemaType } from 'mongoose';

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
		},
		characters_liked: [{
			type: String,
		}],
		characters_eldenRing: [{
			type: Schema.Types.ObjectId,
			ref: 'elden_ring_character',
		}]
		// characters_eldenRing: {
		// 	type: Types.DocumentArray<CharacterEldenRing>,
		// 	ref: 'elden_ring_character',
		// }
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export type User = InferSchemaType<typeof UserSchema>;

export const UserModel = model('user', UserSchema); // collection name, schema
