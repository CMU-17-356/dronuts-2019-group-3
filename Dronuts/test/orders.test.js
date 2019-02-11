require('jest-plugins')(['loopback-jest']);
var loopback = require('loopback');
const order1 = loopback.createModel({
    name: 'Order',
    properties: {
        order_id: 'string',
        user_id: 'string',
        drone_id: 'string',
        items: ['string'],
        destination_lat: 'number',
        destination_lon: 'number',
        completion_status: 'enum'
    }
});

describe('basic order test', () => {
    test('order exists and has correct types', ( ) => {
        expect(order1).not.toBeNull();
        expect(order1.order_id).not.toBeNull();
        expect(order1.user_id).not.toBeNull();
        expect(order1.drone_id).not.toBeNull();
        expect(order1.items).not.toBeNull();
        expect(order1.destination_lat).not.toBeNull();
        expect(order1.destination_lon).not.toBeNull();
        expect(order1.completion_status).not.toBeNull();
        expect(order1).toHavePropertyOfType('order_id', String);
        expect(order1).toHavePropertyOfType('user_id', String);
        expect(order1).toHavePropertyOfType('drone_id', String);
        expect(order1).toHavePropertyOfType('destination_lat', Number);
        expect(order1).toHavePropertyOfType('destination_lon', Number);
    });
});