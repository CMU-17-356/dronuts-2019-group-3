import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import axios from 'axios';



class Order extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location_lat : 0.0,
            location_lon : 0.0,
            location_string : '',
            location_display_name : '',
            //it appears as if the credit api only takes in a number as a string
            card_number : '',
            customer_name : '',
            drone_id : '7'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }
    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state) =>{
            return {[name] : value}
        });
    }
    async formSubmitHandler(event){
        {/**/}
        event.preventDefault();
        var self = this;
        var transID = '';
        const {location_lat, location_lon, location_string, card_number} = this.state;
        console.log(this.state);
        console.log(card_number);
        //Hardcoding the company id as 1 for MVP, could get it from our api
        //
        axios.post('http://credit.17-356.isri.cmu.edu/api/transactions',{
                companyId : '1',
                ammount : sessionStorage.getItem('cartTotal')
        }).then(function(response) {
            console.log(response);
            transID = response.data.id;
            console.log(transID);

        }).then(function(){
            //process transation here
            axios.post('http://credit.17-356.isri.cmu.edu/api/transactions/'.concat(transID,'/process'),{
                    id : transID,
                    customer_details : self.state.customer_name,
                    credit_card : card_number
            }).then(function (response){
                console.log(response);
            });
        });

        

        //do geocoding here
        
        axios.get('https://us1.locationiq.com/v1/search.php',
            {params: {key : '19855c1a20ede5',
                            q : location_string,
                            format: 'json'
        }}).then(function (response){
            console.log(response);
            self.setState({location_lat : parseFloat(response.data[0].lat)});
            self.setState({location_lon : parseFloat(response.data[0].lon)});
            self.setState({location_display_name : response.data[0].display_name});
            console.log(self.state);
            alert('Your Order to:\n'+self.state.location_display_name+'\nHas Been Placed! \nReturn to the menu to place another.');
            console.log('pop up should have been made');
        }).catch(function (error){
            console.log(error);
        });

        // choose drone here 
        //use 7 as place holder until
        var dronesAvailible = [];
        var droneID = 7;
        axios.get('http://drones.17-356.isri.cmu.edu/api/airbases/group3',{
                id : 'group3'
        }).then(function (response){
            console.log(response);
            dronesAvailible = response.data.drones;       
            console.log(dronesAvailible);     
            dronesAvailible.forEach(async function (drone,currIdx){
            await axios.get('http://drones.17-356.isri.cmu.edu/api/drones/'.concat(drone),{
                id : drone
            })
            console.log(drone, response.current_delivery);
            if(response.current_delivery == null || response.current_delivery == undefined ){
                self.setState({drone_id : drone});
                console.log("should select this drone", droneID, drone);
            }
        
        })});
        /*.then(async function(){
        axios.put('http://drones.17-356.isri.cmu.edu/api/drones/'.concat(droneID.toString().concat('/send')),{
                id : droneID,
                lat : location_lat,
                lon : location_lon
        })})*/
            console.log(sessionStorage.getItem('cart'));
            var today = new Date();
            var itemObjs = JSON.parse(sessionStorage.getItem('cart'));
            console.log(itemObjs);
            console.log(droneID);
            var itemNames = itemObjs.map(function(itemObj){
                        return itemObj.name;
            });
            axios.post('http://localhost:80/api/Orders',{
            
                      "user_id": self.state.customer_name,
                      "drone_id": self.state.drone_id,
                      "items": itemNames,
                      "destination_lat": self.state.location_lat,
                      "destination_lon": self.state.location_lon,
                      "completion_status": "In-Progress",
                      "time_placed": today,
                      "time_delivered": today
           });{/*.then(response) => {
                console.log(response);
            };*/}
        
        {/*window.alert('Your Order Has Been Placed');*/}
    }
    render(){
        return (
        <form onSubmit={this.formSubmitHandler}>
        <label>
          Your Name:
          <input
            name="customer_name"
            type="string"
            value={this.state.customer_name}
            onChange={this.handleInputChange} />
        
        </label>
        <br />
        <label>
          Delivery Address:
          <input
            name="location_string"
            type="string"
            value={this.state.location_string}
            onChange={this.handleInputChange} />
        </label>
        {/*}
        <label>
          Delivery Latitude
          <input
            name="location_lat"
            type="number"
            value={this.state.location_lat}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Delivery Longitude:
          <input
            name="location_lon"
            type="number"
            value={this.state.location_lon}
            onChange={this.handleInputChange} />
        </label>
    */}
         <br />
        <label>
          Credit Card Number:
          <input
            name="card_number"
            type="number"
            value={this.state.card_number}
            onChange={this.handleInputChange} />
        
        </label>
        <br />
    
        
        <button
           type="button"
           class="btn btn-primary"
           onClick={this.formSubmitHandler}
          >Submit</button>
          <br />
         <a role="button" className="btn btn-primary"  href="/menu"> Return to Menu </a>
          
      </form>
      );
    }
}

export default Order;
