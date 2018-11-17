const config = {};


/**Link mongoose, if you will go use mongodb online or local put your URL here*/
config.MONGOOSE_URL = 'mongodb://localhost:27017/dito_timeline';

config.MONGOOSE_URL_TEST= 'mongodb://localhost:27017/dito_test';

config.PORT= 4000;

config.API_DITO = 'https://storage.googleapis.com/dito-questions/events.json';


export default config; 