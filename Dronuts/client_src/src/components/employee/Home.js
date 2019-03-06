import React, {Component} from 'react';
import logo from '../../images/dronutbackground.jpg';
<<<<<<< HEAD
import {Card} from 'react-bootstrap';
=======
import {Card, CardColumns} from 'react-bootstrap';
>>>>>>> 569f8f1

const options = {
  day: 'numeric',
  month: 'long',
  weekday: 'short',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
  timeZone: 'America/New_York',
};

// function getItemName(id) {
// 	let name = "";
//   	fetch('http://52.160.82.166/api/Items/'+id, {})
//   	.then(res => res.json())
//   	.then(data => name = data.name.toString())
//   	.then(() => console.log(name));
//   	return name;
// }

class Home extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
      orders: [],
    };
  }
 
  componentWillMount() {
    fetch('http://52.160.82.166/api/Orders?filter=%7B%22completion_status%22%3A%20%22In-Progress%22%7D')
      .then(response => response.text())
      .then(JSON.parse)
      .then(orders => this.setState({ orders }));
  }
 
  render() {
    const { orders } = this.state;
    return (
      <div>
        <header>
          <h1>Pending Orders</h1>
        </header>
        <div className="content padding">
        <CardColumns> 
          {orders.map((order) =>
          	<Card className="p-3" bg="dark" text="white">
			  <Card.Body>
			    <Card.Title>Time Placed: {new Intl.DateTimeFormat('en-US', options).format(new Date(order.time_placed))}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Drone: {order.drone_id}</Card.Subtitle>
			    <Card.Text>
			    Items:<br/>
			    <ul>
			      {order.items.map((item) => 
			      	<li>{item}</li>
			      	)}
			    </ul>
			    </Card.Text>
			    <Card.Link href="#">Cancel</Card.Link>
			    <Card.Link href="#">Complete</Card.Link>
			  </Card.Body>
			</Card>
          )}
        </CardColumns>
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
