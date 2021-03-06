import DatabaseService from '../database/service.js';

import Ingredient from './ingredient.js';

export default class IngredientsService
{
	static model;

	static async initialize()
	{
		Ingredient.initialize(IngredientsService);

		IngredientsService.model = DatabaseService.createModel('Ingredient', Ingredient);
	}

	static async create(data)
	{
		return await IngredientsService.model.create(data);
	}

	static async edit(id, data)
	{
		return await IngredientsService.model.findOneAndUpdate({
			_id: id,
		}, data);
	}

	static async getById(id)
	{
		return await IngredientsService.model.findOne({
			_id: id,
		});
	}

	// exact name only
	static async getByName(name)
	{
		return await IngredientsService.model.findOne({
			name: name,
		});
	}

	static async searchByName(search, result_limit)
	{
		const regex = new RegExp(search);

		return await IngredientsService.model.find({
			name: {
				$regex: regex,
				$options: 'i',
			}
		}).limit(result_limit);
	}
}
