test('order model test', ( ) => {
	var loopback = require('loopback');
    const order1 = loopback.createModel({
    	name: 'order',
    	properties: {
    		order_id: 'string',
    		user_id: 'string',
    		drone_id: 'string',
    		items: ['string'],
    		destination: 'GeoPoint',
    		completion_status: 'string'
    	}
	});
	expect(order1).not.toBeNull();
});