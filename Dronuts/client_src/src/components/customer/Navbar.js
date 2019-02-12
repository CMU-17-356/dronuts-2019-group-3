import React, {Component} from 'react';

class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Dronuts
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/locations">Locations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/employee">Employee Site</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;