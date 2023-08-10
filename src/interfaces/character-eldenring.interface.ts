import { Color } from './color.interface';
export interface CharacterEldenRing {
	name: string;
	base: {
		bodyType: CharacterEldenRing_BodyType,
		age: CharacterEldenRing_Age,
	}
	skinColor: Color,
	adjustFaceTemplate: {
		structure: number,
		emphasis: number,
		age: number,
		aesthetic: number
	},
	facialBalance: {
		size: number,
		ratio: number,
		prostrusion: number,
		veritcal: number,
		slant: number,
		horizontal: number
	},
	foreheadGlabella: {
		depth: number,
		prostrusion: number,
		height: number,
		prot1: number,
		prot2: number,
		width: number
	},
	browRidfeHeight: {
		height: number,
		inner: number,
		outer: number,
	},
	eyes: {
		position: number,
		size: number,
		slant: number,
		spacing: number
	},
	noseRidge: {
		depth: number,
		length: number,
		position: number,
		tipHeight: number,
		prostrusion: number,
		height: number,
		slant: number,
	},
	nostrils: {
		slant: number,
		size: number,
	}
}

export type CharacterEldenRing_Age = 'Young' | 'Mature' | 'Aged';

export type CharacterEldenRing_BodyType = 'Type A' | 'Type B';
