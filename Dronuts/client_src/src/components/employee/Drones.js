import React, {Component} from 'react';
import {CardDeck} from 'react-bootstrap';
import {Drone} from './more_components/Drone';


class Drones extends Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
 
    this.state = {
      drones: [],
    };
  }

  componentDidMount() {
    this.loadData();
    // setInterval(this.loadData, 2000);
  }
 
  async loadData() {
    try {
      const response = await fetch('http://drones.17-356.isri.cmu.edu/api/airbases/group3')
      const data = await response.json();

      this.setState({drones: data.drones});
        
      console.log("call "+this.state.drones);
    }catch (err) {
      console.log(err);
    }
  }
 
  render() {
    return (
      <div>
        <div className="content">
          <header>
            <h1>Drone Statuses</h1>
          </header>
          <br/>
          <div className="container">
            <CardDeck> 
              {this.state.drones.map((drone) =>
              <Drone droneInfo={drone} />
                
              )}
            </CardDeck>
          </div>
          <br/>
          <br/>
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
