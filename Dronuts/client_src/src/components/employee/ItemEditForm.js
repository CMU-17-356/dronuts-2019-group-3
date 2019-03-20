import React, {Component} from 'react';
import axios from 'axios';

class ItemEditForm extends Component {
  constructor(props){
    super(props);
  }

  submitFormHandler = event => {
    event.preventDefault();

    const newValue = this.refs.newValue.value;

    axios.patch('/api/Items', {
      [this.props.attribute]: newValue,
      'id': this.props.id,
    }).then(response => {
        window.location.reload();
      }
    ).catch(error => {
      alert("Failed to edit item. Please make sure your inputs are valid.");
    });
  }

  render(){
    return (
      <div className="float-right">
        <button
          type="button"
          className="btn btn-warning btn-sm"
          data-toggle="collapse"
          data-target={"#editItem-"+this.props.attribute+"-"+this.props.id}
          aria-expanded="false"
          aria-controls={"editItem-"+this.props.attribute+"-"+this.props.id}
        >
          <b>Edit</b>
        </button>
        <div className="collapse" id={"editItem-"+this.props.attribute+"-"+this.props.id}>
          <div className="card">
            <div className="card-body">
              <form className="form">
                <div className="form-group">
                  <label>New {this.props.attribute}:</label>
                  <input className="form-control" name="newValue" ref="newValue" />
                </div>
                <button type="button" className="btn btn-success" onClick={this.submitFormHandler}>Confirm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemEditForm;
