
class TimelineItems {
	constructor(DitoEvents){
		this.DitoEvents = DitoEvents;
	}
	async get(req, res){
		try {
			const data_res = {
				timeline: []
			};
			/** Realiza um get na API */         
			const test = await this.DitoEvents.get(req, res); 

			/**Organiza os dados e adiciona no data_res*/
			function insertTimeline(){            
				for(const i in test.events){
					const data_req = {
						timestamp: undefined, //"2016-10-02T11:37:31.2300892-03:00",
						revenue: undefined, // 120.0,
						transaction_id:undefined,// "3409340",
						store_name:undefined,// "BH Shopping",
						products: []
					};
				
					const data_api = test.events[i];

					/** Busca as compras finalizadas e adiciona os dados no data_req e
					 * depois envia para o data_res
					 */
					if (data_api.event === 'comprou'){

						data_req.revenue = data_api.revenue;
						data_req.timestamp = data_api.timestamp;

						for(const i in data_api.custom_data){
							
							if (data_api.custom_data[i]['key'] === 'transaction_id'){
								data_req.transaction_id = data_api.custom_data[i]['value'];
							}
							if(data_api.custom_data[i]['key'] === 'store_name'){
								data_req.store_name = data_api.custom_data[i]['value'];
							}
						}
						
						data_res.timeline.push(data_req);
					}

				}
			}
			/**Insere os produtos referente a uma determinada transaction_id*/
			function insertProdutos(){
				for(var i in test.events){

					var data_api = test.events[i];
					/**Insere os dados do produto seu transaction_id */
					if (data_api.event === 'comprou-produto'){
						const id_prod = {id:''};
						const produtos_add ={
							name:'',
							price:0
						};
						for(const i in data_api.custom_data){

							if (data_api.custom_data[i]['key'] === 'transaction_id'){
								id_prod.id = data_api.custom_data[i]['value'];
							}
							if(data_api.custom_data[i]['key'] === 'product_name'){
								produtos_add.name = data_api.custom_data[i]['value'];
							}
							if(data_api.custom_data[i]['key'] === 'product_price'){
								produtos_add.price = data_api.custom_data[i]['value'];
							}
						}

						for( const i in data_res.timeline ){
						
							if (data_res.timeline[i].transaction_id === id_prod.id){
								data_res.timeline[i].products.push(produtos_add);
							}
						}
					}
				}
			}

			// Aguarda as funções terminarem de inserir os dados
			await insertTimeline();
			await insertProdutos();

			/** Organiza o resultado em ordem decresente*/
			const response = data_res.timeline.sort(function (a, b) {	
				return (a.timestamp > b.timestamp) ? -1 : ((b.timestamp > a.timestamp) ? 1 : 0);
			});
			res.status(200).json({timeline: response});            
		} catch (error) {
			res.status(500).json({err: error.message});
		}
	}
}

export default TimelineItems;

