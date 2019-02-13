'use strict';
// var app = require('../../server/server');

module.exports = function(Drone) {
    Drone.validatesPresenceOf('drone_id');
    Drone.validatesUniquenessOf('drone_id');
};

// var dronesSchema = {
//     'drone_id': {
//         'type': 'string',
//         'required': true
//     }
// };

// Model.extend('Drone', dronesSchema);