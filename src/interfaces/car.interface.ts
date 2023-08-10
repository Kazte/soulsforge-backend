export interface Car {
	name: string;
	color: string;
	gas: 'gasoline' | 'electric' | 'hybrid';
	year: number;
	description: string;
	price: number;
}