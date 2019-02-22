'use strict';

module.exports = function(Item) {
    //not checking for url safeness yet
    Item.validatesUniquenessOf('name');
    //Item.valitadesLengthOf('name', {max: 80});
    Item.validatesNumericalityOf('price', {int: false});
    Item.validatesNumericalityOf('quanitiy_in_stock', {int: true});
};
