import mongoose from 'mongoose';
import joi from 'joi';


const joigoose_mon = require('joigoose')(mongoose);

//creat the object with joi for validate

const TimelineJoi = joi.object({	
	timestamp: joi.date().timestamp(), //"2016-10-02T11:37:31.2300892-03:00",
	revenue: joi.number(), // 120.0,
	transaction_id: joi.string().required(),// "3409340",
	store_name: joi.string(),// "BH Shopping",
	products: [
		{
			name: joi.string(),// "Tenis Preto",
			price: joi.number()// 120
		}
	]
});

//Convert the EventJoi for a mongoose schema
const timeline_convert = new mongoose.Schema(joigoose_mon.convert(TimelineJoi));
const Timeline = mongoose.model('Timeline', timeline_convert);

export default Timeline;