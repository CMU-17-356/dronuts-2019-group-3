'use strict';

module.exports = function(Drone) {
    Drone.validatesPresenceOf('drone_id');
    Drone.validatesUniquenessOf('drone_id');
};
