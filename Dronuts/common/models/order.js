'use strict';
// var app = require('../../server/server');

module.exports = function(Order) {
    Order.validatesPresenceOf('order_id', 'drone_id', 'user_id', 'items', 'destination_lat', 'destination_lon', 'completion_status', 'time_placed');
    Order.validatesUniquenessOf('order_id');
    Order.validatesInclusionOf('completion_status', {in: ['In-Progress', 'Delivered', 'Cancelled']}, {message: 'orders must be In-Progress, Delivered, or Cancelled'});
    Order.validatesNumericalityOf('destination_lat', 'destination_lon', { message: 'lat and long must be numbers'});
};
// var orderSchema = {
//     'order_id': {
//         'type': 'string',
//         'required': true
//     },
//     'drone_id': {
//         'type': 'string',
//         'required': true
//     },
//     'user_id': {
//         'type': 'string',
//         'required': true
//     },
//     'items': {
//         'type': ['string'],
//         'required': true
//     },
//     'destination_lat': {
//         'type': 'number',
//         'required': true
//     },
//     'destination_lon': {
//         'type': 'number',
//         'required': true
//     },
//     'completion_status': {
//         'type': 'enum',
//         'required': true
//     }
// };

// Model.extend('Order', orderSchema);