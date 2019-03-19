import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Menu extends Component {
  constructor(){
    super();
    this.state = {
      menu: [],
      cart: []
    };
  }

  componentDidMount(){
    axios.get('/api/Items')
      .then(response => {
        this.setState({menu: response.data});
      })

    if(sessionStorage.getItem('cart')){
      this.setState({cart: JSON.parse(sessionStorage.getItem('cart'))});
    }
  }

  addToCart(item){
    var cart = this.state.cart;
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
    this.setState({cart: cart});
    sessionStorage.setItem('cart', JSON.stringify(this.state.cart));
  }

  removeFromCart(item){
    var cart = this.state.cart;
    var itemInCart = cart.find((cartItem) => (cartItem.id === item.id));
    if (itemInCart == null) return;
    if (itemInCart.quantity <= 1) {
      cart.splice(cart.indexOf(itemInCart), 1);
    } else {
      itemInCart.quantity--;
    }
    this.setState({cart: cart});
    sessionStorage.setItem('cart', JSON.stringify(this.state.cart));
  }

  render(){
    const menuRows = this.state.menu.map((item) => (
      <div className="row">
        <div className="col-8 border">
          {item.name}
          <button
           type="button"
           className="btn btn-outline-success btn-sm float-right"
           onClick={() => this.addToCart(item)}
          >Add to cart</button>
        </div>
        <div className="col-4 border text-right">
          ${item.price}
        </div>
      </div>
    ));

    const menuDom = (
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

    const cartRows = this.state.cart.map((cartItem) => (
      <div className="row">
        <div className="col-5 border">
          {cartItem.name}
        </div>
        <div className="col-3 border text-right">
          ${cartItem.price}
        </div>
        <div className="col-4 border text-right">
          {cartItem.quantity}
          &nbsp;
          <button
           type="button"
           class="btn btn-outline-primary btn-sm"
           onClick={() => this.addToCart(cartItem)}
          >+</button>
          &nbsp;
          <button
           type="button"
           class="btn btn-outline-primary btn-sm"
           onClick={() => this.removeFromCart(cartItem)}
          >-</button>
        </div>
      </div>
    ));

    var total = 0;
    this.state.cart.map((cartItem) => (
      total += cartItem.price * cartItem.quantity
    ));
    total = Math.round(total * 100) / 100
    sessionStorage.setItem('cartTotal', total);

    const cartDom = (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5 border text-center">
              <b>Item</b>
            </div>
            <div className="col-3 border text-center">
              <b>Price</b>
            </div>
            <div className="col-4 border text-center">
              <b>Quantity</b>
            </div>
          </div>
          {cartRows}
        </div>
        <h4>Total: ${total}</h4>
        <a role="button" className="btn btn-primary" href="/order">Place Order</a>
      </div>
    );

    return (
      <div>
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
            {menuDom}
          </div>
          <div className="col-4 border text-center">
            {cartDom}
          </div>
        </div>
      </div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Dronuts Group 3</span>
          </div>
        </footer>
      
      </div>
    )
  }
}

export default Menu;
