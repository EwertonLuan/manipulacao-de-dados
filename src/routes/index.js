//http://localhost:4000/api/v1
import timeline from './timeline';

export default (app) => {
	app.use('/api/v1', timeline);
};