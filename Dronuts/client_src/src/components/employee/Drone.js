import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import droneImg from '../../images/donut.png';

class Drone extends Component {
	render () {
		const { drone } = this.props.droneInfo;
    if (drone) {
      return (
        <Card className="fourthwidth">
          <Card.Body>
            <Card.Img variant="top" src={droneImg} className="droneImg"/>
              <Card.Title>Name: {drone.drone_name} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">ID: {drone.id}</Card.Subtitle>
              <Card.Text>
              Details:<br/>
              Latitude: {drone.location.lat} <br/>
              Longitude: {drone.location.lng} <br/>
              Current Delivery: {drone.current_delivery ? drone.current_delivery.status : "None"} <br/>
              {drone.current_delivery ? ("Time Start: "+drone.current_delivery.route.time_start+"<br/>Time Arrive: "+drone.current_delivery.route.time_arrive+"<br/>Time Return: "+drone.current_delivery.route.time_return+"<br/>") : ""}
              Battery Capacity: {drone.battery.capacity} <br/>
              Battery Charge: {drone.battery.charge} <br/>
              </Card.Text>
              <Card.Link href="#">Cancel Delivery</Card.Link>
          </Card.Body>
        </Card>
      )
    } else {
      console.log("no drone info passed");
    }
		
	}
}

export default Drone;