import { Color } from './color.interface';

export interface Car {
	name: string;
	color: Color;
	gas: 'gasoline' | 'electric' | 'hybrid';
	year: number;
	description: string;
	price: number;
}