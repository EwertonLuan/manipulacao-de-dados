
describe('Routes: Timelement', () => {
   
	
	const expectedEvent = {               
		timestamp: "2016-10-02T11:37:31.2300892-03:00",
		revenue: 120,
		transaction_id: "3409340",
		store_name: "BH Shopping",
		products: [
			{
				name: "Tenis Preto",
				price: 120
			}
		]
	};
	
	describe('GET /api/v1/timeline', () => {

		it('should return a list of events', done => {           
        
			request
				.get('/api/v1/timeline')
				.end((err, res) => {                
					expect(res.body.timeline[0]).to.eql(expectedEvent);
					done(err);
				});
		});
	});
});


