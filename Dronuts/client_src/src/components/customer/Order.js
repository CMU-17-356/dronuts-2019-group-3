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
            //it appears as if the credit api only takes in a number as a string
            card_number : ''
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
    formSubmitHandler(event){
        {/**/}
        event.preventDefault();
        
        const {location_lat, location_lon, location_string, card_number} = this.state;
        console.log(this.state);
        console.log(card_number);
        //Hardcoding the company id as 1 for MVP, could get it from our api
        //
        axios.post('http://credit.17-356.isri.cmu.edu/api/transactions',{
                companyId : '1',
                ammount : sessionStorage.getItem('cartTotal')
        });{/*.then(response) => {
            console.log(response);
        };*/}
        //process transation here


        //probably want to choose drone here 
        //use 69 as place holder until

        //do geocoding here
        var self = this;
        axios.get('https://us1.locationiq.com/v1/search.php',
            {params: {key : '19855c1a20ede5',
                            q : location_string,
                            format: 'json'
        }}).then(function (response){
            console.log(response);
            self.setState({location_lat : parseFloat(response.data[0].lat)});
            self.setState({location_lon : parseFloat(response.data[0].lon)});
            console.log(self.state);
        }).catch(function (error){
            console.log(error);
        });




        axios.put('http://drones.17-356.isri.cmu.edu/api/drones/69/send',{
                id : 69,
                lat : location_lat,
                lon : location_lon
        });
    {/*where will user_id ultimatly come from? Should be have them enter their email when ordering? */}
    {/*do I need another post request to the drone api get the drone ID? */}
    {/*need to get items from cart */}
    {/*timestamps to be properly done after MVP stage */}
        console.log(this.state.location_lat);
        axios.post('http://localhost:80/api/Orders',{
        
                  "user_id": "string",
                  "drone_id": "string",
                  "items": [
                    "donut"
                  ],
                  "destination_lat": this.state.location_lat,
                  "destination_lon": this.state.location_lon,
                  "completion_status": "In-Progress",
                  "time_placed": "2019-02-26T05:50:28.279Z",
                  "time_delivered": "2019-02-26T05:50:28.279Z"
       });{/*.then(response) => {
            console.log(response);
        };*/}
        alert('Your Order Has Been Placed! \nReturn to the menu to place another.');
        console.log('pop up should have been made');
        {/*window.alert('Your Order Has Been Placed');*/}
    }
    render(){
        return (
        <form onSubmit={this.formSubmitHandler}>
        <label>
          Delivery Address
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
         <a role="button" className="btn btn-primary"  href="/menu"> Return to Menu </a>
          
      </form>
      );
    }
}

export default Order;
