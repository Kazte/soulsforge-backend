import { InferSchemaType, Schema, model } from 'mongoose';

const CharacterEldenRingSchema = new Schema(
	{
		name: { type: String, required: true },
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
			required: true
		},
		description: {
			type: String,
			default: 'This is a character from Elden Ring. There\'s no description yet but it will be added soon.'
		},
		imageUrl: {
			type: String,
			default: 'https://placehold.co/400?text=No%20Image%20Yet'
		},
		game: { type: String, enum: ['Elden Ring', 'Dark Souls 3', 'Dark Souls 2', 'Dark Souls', 'Bloodborne'], required: true },
		base: {
			bodyType: { type: String, enum: ['Type A', 'Type B'], required: true },
			age: { type: String, enum: ['Young', 'Mature', 'Aged'], required: true },
		},
		skinColor: { type: Object, required: true },
		adjustFaceTemplate: {
			structure: { type: Number, required: true },
			emphasis: { type: Number, required: true },
			age: { type: Number, required: true },
			aesthetic: { type: Number, required: true },
		},
		facialBalance: {
			size: { type: Number, required: true },
			ratio: { type: Number, required: true },
			prostrusion: { type: Number, required: true },
			veritcal: { type: Number, required: true },
			slant: { type: Number, required: true },
			horizontal: { type: Number, required: true },
		},
		foreheadGlabella: {
			depth: { type: Number, required: true },
			prostrusion: { type: Number, required: true },
			height: { type: Number, required: true },
			prot1: { type: Number, required: true },
			prot2: { type: Number, required: true },
			width: { type: Number, required: true },
		},
		browRidgeHeight: {
			height: { type: Number, required: true },
			inner: { type: Number, required: true },
			outer: { type: Number, required: true },
		},
		eyes: {
			position: { type: Number, required: true },
			size: { type: Number, required: true },
			slant: { type: Number, required: true },
			spacing: { type: Number, required: true },
		},
		noseRidge: {
			depth: { type: Number, required: true },
			length: { type: Number, required: true },
			position: { type: Number, required: true },
			tipHeight: { type: Number, required: true },
			prostrusion: { type: Number, required: true },
			height: { type: Number, required: true },
			slant: { type: Number, required: true },
		},
		nostrils: {
			slant: { type: Number, required: true },
			size: { type: Number, required: true },
			width: { type: Number, required: true },
		},
		cheeks: {
			height: { type: Number, required: true },
			depth: { type: Number, required: true },
			width: { type: Number, required: true },
			prostrusion: { type: Number, required: true },
			cheeks: { type: Number, required: true },
		},
		lips: {
			shape: { type: Number, required: true },
			expression: { type: Number, required: true },
			fullness: { type: Number, required: true },
			size: { type: Number, required: true },
			prostrusion: { type: Number, required: true },
			thickness: { type: Number, required: true },
		},
		mouth: {
			prostrusion: { type: Number, required: true },
			slant: { type: Number, required: true },
			occlusion: { type: Number, required: true },
			position: { type: Number, required: true },
			width: { type: Number, required: true },
			distance: { type: Number, required: true },
		},
		chin: {
			chinTip: { type: Number, required: true },
			length: { type: Number, required: true },
			protrusion: { type: Number, required: true },
			depth: { type: Number, required: true },
			size: { type: Number, required: true },
			height: { type: Number, required: true },
			width: { type: Number, required: true },
		},
		jaw: {
			protrusion: { type: Number, required: true },
			width: { type: Number, required: true },
			lower: { type: Number, required: true },
			contour: { type: Number, required: true },
		},
		hair: {
			hair: { type: Number, required: true },
			hairRgb: { type: Object, required: true },
			luster: { type: Number, required: true },
			roots: { type: Number, required: true },
			white: { type: Number, required: true },
		},
		eyebrows: {
			brow: { type: Number, required: true },
			browRgb: { type: Object, required: true },
			luster: { type: Number, required: true },
			roots: { type: Number, required: true },
			white: { type: Number, required: true },
		},
		facialHair: {
			beard: { type: Number, required: true },
			beardRgb: { type: Object, required: true },
			luster: { type: Number, required: true },
			roots: { type: Number, required: true },
			white: { type: Number, required: true },
			stubble: { type: Number, required: true },
		},
		eyelashes: {
			eyelashes: { type: Number, required: true },
			eyelashRgb: { type: Object, required: true },
		},
		rightEye: {
			irisSize: { type: Number, required: true },
			irisRGB: { type: Object, required: true },
			clouding: { type: Number, required: true },
			cloudRGB: { type: Object, required: true },
			whiteRGB: { type: Object, required: true },
			position: { type: Number, required: true },
		},
		leftEye: {
			irisSize: { type: Number, required: true },
			irisRGB: { type: Object, required: true },
			clouding: { type: Number, required: true },
			cloudRGB: { type: Object, required: true },
			whiteRGB: { type: Object, required: true },
			position: { type: Number, required: true },
		},
		skinFeatures: {
			pores: { type: Number, required: true },
			luster: { type: Number, required: true },
			darkCircles: { type: Number, required: true },
			darkCircleRGB: { type: Object, required: true },
		},
		cosmetics: {
			eyeliner: { type: Number, required: true },
			eyelinerRgb: { type: Object, required: true },
			upper: { type: Number, required: true },
			upperRgb: { type: Object, required: true },
			lower: { type: Number, required: true },
			lowerRgb: { type: Object, required: true },
			cheeks: { type: Number, required: true },
			cheeksRgb: { type: Object, required: true },
			lipstick: { type: Number, required: true },
			lipstickRgb: { type: Object, required: true },
		},
		tattooMarkEyePatch: {
			tattoo: { type: Number, required: true },
			tattooRgb: { type: Object, required: true },
			vertical: { type: Number, required: true },
			horizontal: { type: Number, required: true },
			angle: { type: Number, required: true },
			expansion: { type: Number, required: true },
			flip: { type: Boolean, required: true },
			eyepatch: { type: Number, required: true },
			eyepatchRgb: { type: Object, required: true },
		},
		body: {
			head: { type: Number, required: true },
			chest: { type: Number, required: true },
			abdomen: { type: Number, required: true },
			arms: { type: Number, required: true },
			legs: { type: Number, required: true },
			bodyHair: { type: Number, required: true },
			bodyhairRgb: { type: Object, required: true },
			muscle: { type: String, enum: ['Standard', 'Muscular'], required: true },
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export type CharacterEldenRing = InferSchemaType<typeof CharacterEldenRingSchema>;

export const CharacterEldenRingModel = model('elden_ring_character', CharacterEldenRingSchema); // collection name, schema
