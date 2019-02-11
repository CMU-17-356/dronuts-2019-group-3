require('jest-plugins')(['loopback-jest']);
var loopback = require('loopback');

describe('basic drone test', () => {
	test('drone exists and has properties', ( ) => {
	    const drone1 = loopback.createModel({
	    	name: 'drone',
	    	properties: {
	    		drone_id: 'string'
	    	}
		});
		expect(drone1).not.toBeNull();
		expect(drone1).toHavePropertyOfType('drone_id', String);
	});
});
