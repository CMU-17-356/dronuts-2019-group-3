import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var cart = []

function addToCart(item){
  var itemInCart = cart.find((cartItem) => (cartItem.id === item.id));
  if (itemInCart == null) {
    cart.push({
      "id" : item.id,
      "name" : item.name,
      "price" : item.price,
      "quantity" : 1
    });
  } else {
    itemInCart.quantity++;
  }

  const cartRows = cart.map((cartItem) => (
    <div className="row">
      <div className="col-5 border">
        {cartItem.name}
      </div>
      <div className="col-4 border text-right">
        ${cartItem.price}
      </div>
      <div className="col-3 border text-right">
        {cartItem.quantity}
      </div>
    </div>
  ));

  var total = 0;
  cart.map((cartItem) => (
    total += cartItem.price * cartItem.quantity
  ));
  total = Math.round(total * 100) / 100

  const cartElem = (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 border text-center">
            <b>Item</b>
          </div>
          <div className="col-4 border text-center">
            <b>Price</b>
          </div>
          <div className="col-3 border text-center">
            <b>Quantity</b>
          </div>
        </div>
        {cartRows}
      </div>
      <h4>Total: ${total}</h4>
      <a role="button" className="btn btn-primary" href="/order">Place Order</a>
    </div>
  );

  const cartDom = document.getElementById("cart")
  ReactDOM.render(cartElem, cartDom);
}

const menuItems = [
  {
    "id" : 1,
    "name" : "Plain Donut",
    "price" : 0.80
  },
  {
    "id" : 2,
    "name" : "Glazed Donut",
    "price" : 1.00
  },
  {
    "id" : 3,
    "name" : "Glazed Chocolate Donut",
    "price" : 1.20
  }
];

const menuRows = menuItems.map((item) => (
  <div className="row">
    <div className="col-8 border">
      {item.name}
      <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={() => addToCart(item)}>Add to cart</button>
    </div>
    <div className="col-4 border text-right">
      ${item.price}
    </div>
  </div>
));

const menu = (
  <div className="container-fluid">
    <div className="row">
      <div className="col-8 border text-center">
        <b>Item</b>
      </div>
      <div className="col-4 border text-center">
        <b>Price</b>
      </div>
    </div>
    {menuRows}
  </div>
);

class Menu extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 border text-center">
            <h3>Menu</h3>
          </div>
          <div className="col-4 border text-center">
            <h3>My Cart</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-8 border">
            {menu}
          </div>
          <div className="col-4 border text-center">
            <div id="cart"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
