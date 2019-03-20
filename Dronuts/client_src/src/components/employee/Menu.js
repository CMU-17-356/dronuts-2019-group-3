import React, {Component} from 'react';
import ItemAddForm from './ItemAddForm';
import ItemEditForm from './ItemEditForm';
import axios from 'axios';

class Menu extends Component {
  constructor(){
    super();
    this.state = {
      menu: []
    };
  }

  componentDidMount(){
    axios.get('/api/Items')
      .then(response => {
        this.setState({menu: response.data});
      });
  }

  deleteItem(name, id){
    if (window.confirm('Are you sure you want to delete ' + name + '?')) {
      axios.delete('/api/Items/' + id)
        .then(response => {
          window.location.reload();
        });
    }
  }

  render(){
    const menuRows = this.state.menu.map((item) => (
      <div className="row">
        <div className="col-3 border">
          {item.name}
          <ItemEditForm id={item.id} attribute="name" />
        </div>
        <div className="col-5 border">
          {item.description}
          <ItemEditForm id={item.id} attribute="description" />
        </div>
        <div className="col-2 border">
          ${item.price}
          <ItemEditForm id={item.id} attribute="price" />
        </div>
        <div className="col-2 border">
          <button type="button" className="btn btn-danger btn-sm btn-block" onClick={() => this.deleteItem(item.name, item.id)}>
            <b>Delete {item.name}</b>
          </button>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 border">
              <b>Item:</b>
            </div>
            <div className="col-5 border">
              <b>Description:</b>
            </div>
            <div className="col-2 border">
              <b>Price:</b>
            </div>
            <div className="col-2 border">
            </div>
          </div>
          {menuRows}
          <ItemAddForm />
        </div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Dronuts Group 3</span>
          </div>
        </footer>
      </div>
    )
  }
}

export default Menu;
