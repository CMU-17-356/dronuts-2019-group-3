import React, {Component} from 'react';
import logo from '../../images/dronutbackground.jpg';
import {CardColumns} from 'react-bootstrap';
import {Order} from './more_components/Order';

class Home extends Component {
	constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
 
    this.state = {
      orders: [],
    };
  }
 
  componentDidMount() {
    fetch('http://52.160.82.166/api/Orders?filter[where][completion_status]=In-Progress&filter[order]=time_placed')
      .then(response => response.text())
      .then(JSON.parse)
      .then(orders => this.setState({ orders }));
  }
 
  render() {
    const { orders } = this.state;
    return (
      <div>
        <div className="content">
          <header>
            <h1>Pending Orders</h1>
          </header>
          <div className="padding">
            <CardColumns> 
              {orders.map((order) =>
                <Order order={order}/>
              )}
            </CardColumns>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">Dronuts Group 3</span>
          </div>
        </footer>
      </div>
    );
  }
  
}

export default Home;
