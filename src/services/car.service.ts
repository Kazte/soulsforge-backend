/* eslint-disable @typescript-eslint/no-explicit-any */
import { Car } from '../interfaces/car.interface';
import { CarModel } from '../models/car.model';
import { logInfo } from '../utilities/log.utility';

const insertCarService = async (item: Car) => {
	const responseInsert = await CarModel.create(item);
	return responseInsert;
};

const getCarsService = async () => {
	const responseitems = await CarModel.find({});
	return responseitems;
};

const getCarService = async (id: string) => {
	const response = await CarModel.findById(id).exec();

	return response;
};

const updateCarService = async (id: string, item: Car) => {
	// Return the object already updated instead of the object before the update
	const responseItem = await CarModel.findByIdAndUpdate(
		{
			_id: id
		},
		item,
		{
			new: true,
		});
	return responseItem;
};

const deleteCarService = async (id: string) => {
	const responseItem = await CarModel.deleteOne({ _id: id });
	return responseItem;
};

export { insertCarService, getCarsService, getCarService, updateCarService, deleteCarService };