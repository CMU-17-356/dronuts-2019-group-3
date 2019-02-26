import React, {Component} from 'react';

class Order extends Component {
  constructor(){
    super();
    this.state = {cart: []};
  }

  componentDidMount(){
    if(sessionStorage.getItem('cart')){
      this.setState({cart: sessionStorage.getItem('cart')});
    }
  }

  render(){
    if (this.state.cart) {
      return (
        <div>
          <p>Here is your cart but in raw JSON:</p>
          <p>{this.state.cart}</p>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Sorry, there was an error with your order.</h1>
        </div>
      )
    }
  }
}

export default Order;
