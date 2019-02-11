// 'use strict';

// module.exports = function(Drone) {

// };
var dronesSchema = {
    'drone_id': {
        'type': 'string',
        'required': true
    }
};

Model.extend('Drone', dronesSchema);