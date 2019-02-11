require('jest-plugins')(['loopback-jest']);

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
    		completion_status: 'enum'
    	}
	});
	expect(order1).not.toBeNull();
	expect(order1).toHavePropertyOfType('order_id', String);
	expect(order1).toHavePropertyOfType('user_id', String);
	expect(order1).toHavePropertyOfType('drone_id', String);
});