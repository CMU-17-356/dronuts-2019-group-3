import React, {Component} from 'react';
import {Card, CardGroup, Col} from 'react-bootstrap';
import droneImg from '../../images/donut.png';

class Drones extends Component {
  constructor(props) {
    super(props);
    this.componentWillMount = this.componentWillMount.bind(this);

 
    this.state = {
      drones: [],
    };
  }
 
  componentWillMount() {
    fetch('http://drones.17-356.isri.cmu.edu/api/airbases/group3')
      .then(function(response) {return response.json();})
      .then(data => {
        var ids = data.drones;
        var id;
        for (id in ids) {
          console.log(ids[id]);
          fetch('http://drones.17-356.isri.cmu.edu/api/drones/' + ids[id].toString())
            .then(function(response) {return response.json();})
            .then(data => {
              console.log(data);
              var newState = this.state.drones.slice();
              newState.push(data);
              this.setState({drones: newState});
          })
        }

      });
  }
 
  render() {
    const { drones } = this.state;
    return (
      <div>
        <header>
          <h1>Drone Statuses</h1>
        </header>
        <div className="content padding">
          <CardGroup> 
            {drones.map((drone) =>
              <Card className="fourthwidth">
                <Card.Body>
                  <Card.Img variant="top" src={droneImg} className="droneImg"/>
                  <Card.Title>Name: {drone.drone_name} </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">ID: {drone.id}</Card.Subtitle>
                  <Card.Text>
                  Details:<br/>
                  Latitude: {drone.location.lat} <br/>
                  Longitude: {drone.location.lng} <br/>
                  Current Delivery: {drone.current_delivery} <br/>
                  Battery Capacity: {drone.battery.capacity} <br/>
                  Battery Charge: {drone.battery.charge} <br/>
                  </Card.Text>
                  <Card.Link href="#">Cancel</Card.Link>
                  <Card.Link href="#">Complete</Card.Link>
                </Card.Body>
              </Card>
            )}
          </CardGroup>
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

export default Drones;
