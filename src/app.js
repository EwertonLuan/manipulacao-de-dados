import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import database from './config/database';


const app = express();

const configureExpress = () =>{
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(cors());
	routes(app);
	return app;
};

const app_prod = () => database.connect().then(configureExpress);
const app_test = () => database.connect_test().then(configureExpress);

export default {
	app_prod,
	app_test
}; 