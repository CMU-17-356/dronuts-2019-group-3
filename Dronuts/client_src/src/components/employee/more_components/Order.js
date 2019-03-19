import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'short',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
  timeZone: 'America/New_York',
};

export class Order extends Component {
  onCancel() {
    try {
      fetch('http://52.160.82.166/api/Orders/'+this.props.order.id, 
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PATCH',
          body: JSON.stringify({
            "user_id": this.props.order.user_id,
            "drone_id": this.props.order.drone_id,
            "items": this.props.order.items,
            "destination_lat": this.props.order.destination_lat,
            "destination_lon": this.props.order.destination_lon,
            "completion_status": "Cancelled",
            "time_placed": this.props.order.time_placed,
            "time_delivered": null,
            "id": this.props.order.id
          })
        }
      )
      alert("Order cancelled.");
      window.location.reload();
    } catch(err) {
      console.log(err);
    }
    
  }

  onComplete() {
    try {
      fetch('http://52.160.82.166/api/Orders/'+this.props.order.id, 
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PATCH',
          body: JSON.stringify({
            "user_id": this.props.order.user_id,
            "drone_id": this.props.order.drone_id,
            "items": this.props.order.items,
            "destination_lat": this.props.order.destination_lat,
            "destination_lon": this.props.order.destination_lon,
            "completion_status": "Delivered",
            "time_placed": this.props.order.time_placed,
            "time_delivered": null,
            "id": this.props.order.id
          })
        }
      )
      console.log(this.props.order.destination_lon);
      try {
        fetch('http://drones.17-356.isri.cmu.edu/api/drones/'+this.props.order.drone_id.toString()+'/send',
        {
          headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
              "id": this.props.order.drone_id,
              "lat": this.props.order.destination_lat,
              "lon": this.props.order.destination_lon,
            })
        })
      } catch(err) {
        console.log(err);
      }
      alert("Order completed and out for delivery.");
      window.location.href = "../../employee/drones";
    } catch(err) {
      console.log(err);
    }
  }

	render() {
		return(
			<Card className="p-3" bg="dark" text="white">
       <Card.Body>
        <Card.Title>Time Placed: {new Intl.DateTimeFormat('en-US', options).format(new Date(this.props.order.time_placed))}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Drone: {this.props.order.drone_id}</Card.Subtitle>
        <Card.Text>
        Items:<br/>
        <ul>
          {this.props.order.items.map((item) => 
            <li>{item}</li>
            )}
        </ul>
        </Card.Text>
        <Button variant="danger" onClick={() => this.onCancel()}>Cancel</Button>
        <Button variant="success" className="rightalign" onClick={() => this.onComplete()}>Complete</Button>
       </Card.Body>
     </Card>
		)
	}
}