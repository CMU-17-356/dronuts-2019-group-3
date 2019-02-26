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
            //it appears as if the credit api only takes in a number as a string
            card_number : ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    formSubmitHandler(){
        {/*console.log(this.state);*/}
        //Hardcoding the company id as 1 for MVP, could get it from our api
        //
        axios.post('http://credit.17-356.isri.cmu.edu/api/transactions',{
                companyId : '1',
                ammount : sessionStorage.getItem('cartTotal')
        });{/*.then(response) => {
            console.log(response);
        };*/}
    {/*where will user_id ultimatly come from? Should be have them enter their email when ordering? */}
    {/*do I need another post request to the drone api get the drone ID? */}
    {/*need to get items from cart */}
    {/*timestamps to be properly done after MVP stage */}
        axios.post('http://localhost:80/api/Orders',{
        
                  "user_id": "string",
                  "drone_id": "string",
                  "items": [
                    "donut"
                  ],
                  "destination_lat": this.location_lat,
                  "destination_lon": this.location_lon,
                  "completion_status": "In-Progress",
                  "time_placed": "2019-02-26T05:50:28.279Z",
                  "time_delivered": "2019-02-26T05:50:28.279Z"
       });{/*.then(response) => {
            console.log(response);
        };*/}
        Popup.alert('Your Order Has Been Placed');
    }
    render(){
        return (
        <form>
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
         <br />
        <label>
          Credit Card Number:
          <input
            name="card_number"
            type="number"
            value={this.state.card_number}
            onChange={this.handleInputChange} />
        </label>
        <a role="button" className="btn btn-primary" onClick={this.formSubmitHandler} href="/menu"> Submit </a>
      </form>
      );
    }
}

export default Order;
