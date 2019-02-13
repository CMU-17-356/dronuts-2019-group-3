// require('jest-plugins')(['loopback-jest']);
// var loopback = require('loopback');

// describe('basic drone test', () => {
//     test('drone exists and has properties', ( ) => {
//         const drone1 = loopback.createModel({
//             name: 'Drone',
//             properties: {
//                 drone_id: 'string'
//             }
//         });
//         expect(drone1).not.toBeNull();
//         expect(drone1).toHavePropertyOfType('drone_id', String);
//         expect(drone1).not.toHavePropertyOfType('drone_id', Number);
//         expect(drone1.drone_id).not.toBeNull();

//         const drone2 = loopback.createModel({
//             name: 'Drone',
//             properties: {
//                 drone_id: 1
//             }
//         });
//         expect(drone2.drone_id).toBeUndefined();
//     });
// });
