import React, {Component} from 'react';

var menu = [
  {
    "name" : "Donuts",
    "items" : [
      {
        "name" : "Plain Donut",
        "description" : "Good old plain donut, probably the healthiest.",
        "price" : 0.80
      },
      {
        "name" : "Glazed Donut",
        "description" : "Because plain donuts are boring, and diabetes is not a problem.",
        "price" : 1.00
      }
    ]
  },
  {
    "name" : "Beverages",
    "items" : [
      {
        "name" : "Coffee",
        "description" : "Can't survive CMU without this.",
        "price" : 1.00
      }
    ]
  }
];

function renderItems(category){
  return (
    category.items.map((item) => (
      <div className="row">
        <div className="col-4 border">
          {item.name}
        </div>
        <div className="col-6 border">
          {item.description}
        </div>
        <div className="col-2 border">
          ${item.price}
        </div>
      </div>
    ))
  )
}

function renderCategories(menu){
  return (
    menu.map((category) => (
      <div className="row">
        <div className="col border">
          <h4>{category.name}:</h4>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 border">
                <b>Item</b>
              </div>
              <div className="col-6 border">
                <b>Description</b>
              </div>
              <div className="col-2 border">
                <b>Price</b>
              </div>
            </div>
            {renderItems(category)}
            <div className="row">
              <div className="col border">
                <button type="button" className="btn btn-warning btn-sm btn-block" data-toggle="collapse" data-target={"#addItem-"+category.name} aria-expanded="false" aria-controls={"addItem-"+category.name}>
                  <b>Add Item</b>
                </button>
                <div className="collapse" id={"addItem-"+category.name}>
                  <div className="card">
                    <div className="card-body">
                      <form className="form">
                        <div className="form-group">
                          <label>Name:</label>
                          <input className="form-control" />
                        </div><div className="form-group">
                          <label>Description:</label>
                          <input className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Price:</label>
                          <input className="form-control" />
                        </div>
                        <button type="button" className="btn btn-success">Confirm</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    ))
  )
}

class Menu extends Component {
  render(){
    const categories = renderCategories(menu);

    return (
      <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col border">
            <h2>Categories:</h2>
          </div>
        </div>
        <div id="categories">{categories}</div>
        <div className="row">
          <div className="col border">
            <button type="button" className="btn btn-warning btn-md btn-block" data-toggle="collapse" data-target="#addCategory" aria-expanded="false" aria-controls="addCategory">
              <b>Add Category</b>
            </button>
            <div className="collapse" id="addCategory">
              <div className="card">
                <div className="card-body">
                  <form className="form-inline">
                    <div className="form-group">
                      <label>Name:&nbsp;</label>
                      <input className="form-control" />&nbsp;
                      <button type="button" className="btn btn-success">Confirm</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
