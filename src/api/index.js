import axios from 'axios'; 
import config from '../config';

class DitoApi {

	async get(req, res){
		try{
			const timeline = await axios.get(config.API_DITO);		
			return timeline.data;
			
		} catch (err) {
			return err;
		}
		
	}

}

export default DitoApi;