import SiteEventController from '../../../src/controllers/products.controller';
import sinon from 'sinon';
import Database from '../../../src/models/SiteEvent';

describe('Controles: Products', () =>{
	// const defaultEvent = [{
	//     name: 'Default product',
	//     description: 'product description',
	//     price: 100
	//     }];
    
	const defaultEvent = {
		event: 'buy',
		timestamp: '2016-09-22T16:57:31.231Z'
	};

	const defaultRequest = {
		params: {}
	};
    
	describe('get() siteEvent', () => {
		it('should call send with a list of siteEvents', () => {
            
			const response = {
				send: sinon.spy()
			};
			Database.SiteEvent.find = sinon.stub();
			Database.SiteEvent.find.withArgs({}).resolves(defaultEvent);

			const siteEventController = new SiteEventController(Database.SiteEvent);
			return siteEventController.get(defaultRequest, response)
				.then(() => {
					sinon.assert.calledWith(response.send, defaultEvent);
				});
		});

	});
	describe('create() siteEvent', () => {
		it('should call send with a new siteEvent', () => {
			const requestWithBody = Object.assign({}, { body: defaultEvent[0] }, defaultRequest);
			const response = {
				send: sinon.spy(),
				status: sinon.stub()
			};
			class fakeProduct {
				save() {}
			}
			response.status.withArgs(201).returns(response);

			sinon.stub(fakeProduct.prototype, 'save').withArgs().resolves();
            
			const siteEventController = new SiteEventController(fakeProduct);

			return siteEventController.create(requestWithBody, response)
				.then(() => {
					sinon.assert.calledWith(response.send);
                    
				});
                    
		});
	});
});