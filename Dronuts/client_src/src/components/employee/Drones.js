import React, {Component} from 'react';
import {CardDeck} from 'react-bootstrap';
import {Drone} from '../Drone';


class Drones extends Component {
  constructor(props) {
    super(props);

 
    this.state = {
      drones: [],
    };
  }

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 2000);
  }
 
  async loadData() {
    try {
      this.setState({drones: []});
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
      console.log("call");
    }catch {
      console.log("error");
    }
  }
 
  render() {
    const { drones } = this.state;
    return (
      <div>
        <div className="content">
          <header>
            <h1>Drone Statuses</h1>
          </header>
          <br/>
          <div className="container">
            <CardDeck> 
              {drones.map((drone) =>
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
