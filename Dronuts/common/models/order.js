// 'use strict';

// module.exports = function(Order) {

// };
var orderSchema = {
    'order_id': {
        'type': 'string',
        'required': true
    },
    'drone_id': {
        'type': 'string',
        'required': true
    },
    'user_id': {
        'type': 'string',
        'required': true
    },
    'items': {
        'type': ['string'],
        'required': true
    },
    'destination_lat': {
        'type': 'number',
        'required': true
    },
    'destination_lon': {
        'type': 'number',
        'required': true
    },
    'completion_status': {
        'type': 'enum',
        'required': true
    }
};

Model.extend('Order', orderSchema);