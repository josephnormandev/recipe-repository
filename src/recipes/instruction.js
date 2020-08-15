import Mongoose from 'mongoose';

import DatabaseService from '../database/service.js';

export default class Instruction extends Mongoose.SchemaType
{
	constructor(key, options)
	{
		super(key, options, 'Instruction');
	}

	cast(value)
	{
		if(typeof value === 'object' && value != null)
		{
			if(value.text != null)
			{
				return value;
			}
		}
		throw new Error('Not a valid Instruction type');
	}
}
