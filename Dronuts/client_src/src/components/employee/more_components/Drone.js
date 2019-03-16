import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import droneImg from '../../../images/donut.png';

const options = {
  day: 'numeric',
  month: 'long',
  weekday: 'short',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
  timeZone: 'America/New_York',
};

export class Drone extends Component {
  constructor(props) {
    super();
    this.loadData = this.loadData.bind(this);
    this.state = {
      id: props.droneInfo,
      drone_name: null,
      lat: null,
      lon: null,
      status: null,
      time_start: null,
      time_arrive: null,
      time_return: null,
      capacity: null,
      charge: null,
    }
  }

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 2000);
  }

  async loadData() {
    try {
      const response = await fetch('http://drones.17-356.isri.cmu.edu/api/drones/' + this.state.id.toString())
      const data = await response.json();
      console.log(data);
      var dataStatus = null;
      var dataTS = null;
      var dataTA = null;
      var dataTR = null;
      if (data.current_delivery) {
        dataStatus = data.current_delivery.status;
        dataTS = new Intl.DateTimeFormat('en-US', options).format(new Date(data.current_delivery.route.time_start));
        dataTA = new Intl.DateTimeFormat('en-US', options).format(new Date(data.current_delivery.route.time_arrive));
        dataTR = new Intl.DateTimeFormat('en-US', options).format(new Date(data.current_delivery.route.time_return));
      }
      this.setState({
        id: data.id,
        drone_name: data.drone_name,
        lat: data.location.lat,
        lon: data.location.lng,
        status: dataStatus,
        time_start: dataTS,
        time_arrive: dataTA,
        time_return: dataTR,
        capacity: data.battery.capacity,
        charge: data.battery.charge,            
      });
      console.log("successfully fetched drone data");
    } catch (err) {
      console.log(err);
    }
  }

	render () {
		
    if (this.state.id) {
      
      return (
        <Card className="fourthwidth">
          <Card.Body>
            <Card.Img variant="top" src={droneImg} className="droneImg"/>
              <Card.Title>Name: {this.state.drone_name} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">ID: {this.state.id}</Card.Subtitle>
              <Card.Text>
              <br/>
              Latitude: {this.state.lat} <br/>
              Longitude: {this.state.lon} <br/><br/>
              Current Delivery: {this.state.status ? <div> {this.state.status} <br/> Time Start: {this.state.time_start} <br/> Time Arrive: {this.state.time_arrive} <br/> Time Return: {this.state.time_return} </div> : <div>None</div>}<br/>
              Battery Capacity: {this.state.capacity} <br/>
              Battery Charge: {this.state.charge} <br/>
              </Card.Text>
              <Card.Link href="#">Cancel Delivery</Card.Link>
          </Card.Body>
        </Card>
      )
      console.log("got it! " + this.state.id);
    } else {
      console.log("no drone info passed " + this.props.droneInfo + ".");
    }
		
	}
}


