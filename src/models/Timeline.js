
import joi from 'joi';

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

export default TimelineJoi;