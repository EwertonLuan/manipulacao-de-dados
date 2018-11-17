import Timeline from '../models/Timeline';

class TimelineItems {
	constructor(DitoEvents){
		this.DitoEvents = DitoEvents;
	}
	async get(req, res){
		try {          
			const compras_id = [];            
			const test = await this.DitoEvents.get(req, res); 
                        
			for(var i in test.events){
			
				var eventosPararodar = test.events[i];

				if (eventosPararodar.event === 'comprou-produto'){
					const id = {
						id,
						produtos: {
							item:'',
							preco:0
						}                       
					};
					for(var i in eventosPararodar.custom_data){
                        
						if (eventosPararodar.custom_data[i]['key'] === 'transaction_id'){
							//Adiciona uma id para cada compra como item principal
							id.id = eventosPararodar.custom_data[i]['value'];
						}
						if(eventosPararodar.custom_data[i]['key'] === 'product_name'){
							id.produtos.item = eventosPararodar.custom_data[i]['value'];
						}
						if(eventosPararodar.custom_data[i]['key'] === 'product_price'){
							id.produtos.preco = eventosPararodar.custom_data[i]['value'];
						}
						console.log(id);
					}
					compras_id.push(id);
				}
			}
			function getId(list){
				for(var i in list){
                        
					if (list[i]['key'] === 'transaction_id'){
						//Adiciona uma id para cada compra como item principal
						return list[i]['value'];
					}
				}
			}
			res.status(200).json(compras_id);            
		} catch (error) {
			res.status(500).json({err: error.message});
		}
	}
	organize(){
		const data = {
			timeline: [
				{
					timestamp, //"2016-10-02T11:37:31.2300892-03:00",
					revenue, // 120.0,
					transaction_id,// "3409340",
					store_name,// "BH Shopping",
					products: [
						{
							name,// "Tenis Preto",
							price,// 120
						}
					]
				}
			]
		};
	}
}

export default TimelineItems;

