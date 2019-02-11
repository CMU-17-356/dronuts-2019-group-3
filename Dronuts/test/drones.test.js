describe('basic drone test', () => {
	test('drone exists and has properties', ( ) => {
		var loopback = require('loopback');
	    const drone1 = loopback.createModel({
	    	name: 'drone',
	    	properties: {
	    		drone_id: 'string'
	    	}
		});
		expect(drone1).not.toBeNull();
	});
});
