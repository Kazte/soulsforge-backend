import { Color } from './../interfaces/color.interface';
import { Schema, Types, model, Model } from 'mongoose';
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>(
	{
		name: {
			type: String,
			required: true,
		},
		color: {
			type: {
				r: {
					type: Number,
					required: true,
					min: 0,
					max: 255
				},
				g: {
					type: Number,
					required: true,
					min: 0,
					max: 255
				},
				b: {
					type: Number,
					required: true,
					min: 0,
					max: 255
				},
			},
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