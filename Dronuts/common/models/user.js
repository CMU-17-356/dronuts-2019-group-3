'use strict';

module.exports = function(User) {
    //Not checking for url safeness yet
    User.validatesFormatOf('email', {with : /\S+@\S+\.\S+/});
    User.validatesUniquenessOf('email');
    //no password validations at the moment
    User.validatesInclusionOf('role', {in : ['customer', 'employee', 'admin'], 
        message: ' must choose from "customer", "employee",  or "admin" '});

};
