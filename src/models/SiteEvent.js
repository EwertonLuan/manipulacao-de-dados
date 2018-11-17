import mongoose from 'mongoose';
import joi from 'joi';


const joigoose_mon = require('joigoose')(mongoose);

//creat the object with joi for validate
const SiteEventJoi = joi.object({
	event: joi.string().alphanum().min(3).max(30).required(),
	timestamp: joi.date().timestamp().required()
});

//Convert the EventJoi for a mongoose schema
const eventos_convert = new mongoose.Schema(joigoose_mon.convert(SiteEventJoi));
const SiteEvent = mongoose.model('Event', eventos_convert);

export default {
	SiteEvent,
	SiteEventJoi
};