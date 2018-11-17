import setupApp from './src/app';
import config from './src/config';


setupApp.app_prod().then(app => app.listen(config.PORT, () => {
	console.log('Express server started...');
})
).catch(error => {		
	console.error(error);		
	process.exit(1);
});;