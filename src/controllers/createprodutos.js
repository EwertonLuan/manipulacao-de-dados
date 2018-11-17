import Timeline from '../models/Timeline';
import DitoEvents from '../api';


export default async (req, res) =>{
	const data_timeline = {
		timestamp: '', //"2016-10-02T11:37:31.2300892-03:00",
		revenue: 0,
		transaction_id: '',
        
		store_name: ''
		// products: [
		//     // {
		//     //     name,// "Tenis Preto",
		//     //     price,// 120
		//     // }
		// ]
	};

    
	const ditoEvents = new DitoEvents();
	const api_data = await ditoEvents.get(req, res);
    
	async function  createTimeline() {
		const result = [];

		for (var i in api_data.events){
			const data = api_data.events[i];

			if (data.event === 'comprou'){

				data_timeline.revenue = data.revenue;
				data_timeline.timestamp = data.timestamp;

				for(var i in data.custom_data){
                        
					if (data.custom_data[i]['key'] === 'transaction_id'){
						//Adiciona uma id para cada compra como item principal
                        
						data_timeline.transaction_id = data.custom_data[i]['value'];
					}
					if(data.custom_data[i]['key'] === 'store_name'){
						data_timeline.store_name = data.custom_data[i]['value'];
					}

                 
				}

				const timeline = new Timeline(data_timeline);
				await timeline.save();
				result.push(timeline);
			}
        
        

		}
        
		return result;

	}
	async function insertProduts() {
                                
		for(var i in api_data.events){
        
			var eventosPararodar = api_data.events[i];

			if (eventosPararodar.event === 'comprou-produto'){
				let id = '';
				const insert = {};
				for(var i in eventosPararodar.custom_data){
                        
					if (eventosPararodar.custom_data[i]['key'] === 'transaction_id'){
						//Adiciona uma id para cada compra como item principal
						id = eventosPararodar.custom_data[i]['value'];
					}
					if(eventosPararodar.custom_data[i]['key'] === 'product_name'){

						insert.name = eventosPararodar.custom_data[i]['value'];
					}
					if(eventosPararodar.custom_data[i]['key'] === 'product_price'){
						insert.price = eventosPararodar.custom_data[i]['value'];
					}
				}
				//db.getCollection('timelines').findOneAndUpdate({transaction_id:'3029384'}, {$set: {produto:'asasa'}})
                
                
				console.log(insert);
				console.log(id);
				// await Timeline.findOneAndUpdate({transaction_id:id},{$push: {products:insert}})
				await Timeline.updateOne({transaction_id:id},{$push: {products:insert}});
                

			}

		}
        
	}

	insertProduts().then(result => res.send(result));
    

	// res.send(timeline)

};