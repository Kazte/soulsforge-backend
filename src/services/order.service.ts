import { CarModel } from '../models/car.model';

const getOrdersService = async () => {
	const responseitems = await CarModel.find({});
	return responseitems;
};
export { getOrdersService };