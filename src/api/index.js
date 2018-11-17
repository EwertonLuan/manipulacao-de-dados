import axios from 'axios'; 
import config from '../config';

class DitoEvents {

	async get(req, res){
		try{
			const timeline = await axios.get(config.API_DITO);
			// res.status(200).json(timeline.data)
		
			return timeline.data;
			
		} catch (err) {
			// res.status(500).json(err)
			return err;
		}
		
	}

}

export default DitoEvents;