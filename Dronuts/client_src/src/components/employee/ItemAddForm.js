import React, {Component} from 'react';
import axios from 'axios';

class ItemAddForm extends Component {
  submitFormHandler = event => {
    event.preventDefault();

    const name = this.refs.name.value;
    const description = this.refs.description.value;
    const price = this.refs.price.value;

    axios.post('/api/Items', {
      'name': name,
      'price': price,
      'quantity': 0,
      'description': description,
    }).then(response => {
        window.location.reload();
      }
    ).catch(error => {
      alert("Failed to add item. Please make sure your inputs are valid.");
    });
  }

  render(){
    return (
      <div className="row">
        <div className="col border">
          <button type="button" className="btn btn-warning btn-sm btn-block" data-toggle="collapse" data-target="#addItem" aria-expanded="false" aria-controls="addItem">
            <b>Add Item</b>
          </button>
          <div className="collapse" id="addItem">
            <div className="card">
              <div className="card-body">
                <form className="form">
                  <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control" name="name" ref="name" />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <input className="form-control" name="description" ref="description" />
                  </div>
                  <div className="form-group">
                    <label>Price:</label>
                    <input className="form-control" name="price" ref="price" />
                  </div>
                  <button type="button" className="btn btn-success" onClick={this.submitFormHandler}>Confirm</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemAddForm;
