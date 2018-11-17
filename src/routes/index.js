//http://localhost:4000/api/v1
import events from './events';

export default (app) => {
	app.use('/api/v1', events);
	
};