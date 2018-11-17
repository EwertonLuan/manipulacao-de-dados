import app from './src/app';
import config from './src/config';


app.listen(config.PORT, () => {
	console.log('Express server started...');
})

