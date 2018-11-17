import config from './index';
import mongoose from 'mongoose';


/**link to connect with mongodb*/
const connect = () => mongoose.connect(config.MONGOOSE_URL, { useNewUrlParser: true },(err) => {
	// if(!err){
	// 	console.log('Connection established to MongoDB.');
        
	// } else {
	// 	console.log('Not possible to established the connection to MongoDB.');
	// }

});
const connect_test = () => mongoose.connect(config.MONGOOSE_URL_TEST, { useNewUrlParser: true },(err) => {
	// if(!err){
	// 	console.log('Connection established to MongoDB.');
        
	// } else {
	// 	console.log('Not possible to established the connection to MongoDB.');
	// }

});

export default {
	connect,
	connect_test
};