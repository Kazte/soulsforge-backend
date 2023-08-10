import { Schema, Types, model, Model } from 'mongoose';
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>(
	{
		name: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		gas: {
			type: String,
			enum: ['gas', 'electric', 'hybrid'],
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const CarModel = model('items', ItemSchema); // collection name, schema