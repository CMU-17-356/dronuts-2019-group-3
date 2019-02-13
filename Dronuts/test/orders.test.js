// require('jest-plugins')(['loopback-jest']);
// // var loopback = require('loopback');
// var app = require('../server/server');

// var Order = app.models.Order;
// const order1 = Order.create([{
//     // name: 'Order',
//     // properties: {
//         order_id: 'string',
//         user_id: 'string',
//         drone_id: 'string',
//         items: ['string'],
//         destination_lat: 'number',
//         destination_lon: 'number',
//         completion_status: 'enum',
//         time_placed: 'date',
//     // }
// }]);

// describe('basic order test', () => {
//     test('order exists and has correct types', ( ) => {
//         expect(order1).not.toBeNull();
//         expect(order1).toBeDefined();
//         expect(order1.order_id).toBeDefined();
//         expect(order1.user_id).toBeDefined();
//         expect(order1.drone_id).toBeDefined();
//         expect(order1.items).toBeDefined();
//         expect(order1.destination_lat).toBeDefined();
//         expect(order1.destination_lon).toBeDefined();
//         expect(order1.completion_status).toBeDefined();
//         expect(order1).toHavePropertyOfType('order_id', String);
//         expect(order1).toHavePropertyOfType('user_id', String);
//         expect(order1).toHavePropertyOfType('drone_id', String);
//         // expect(order1).toHavePropertyOfType('destination_lat', Number);
//         // expect(order1).toHavePropertyOfType('destination_lon', Number);
//     });
// });