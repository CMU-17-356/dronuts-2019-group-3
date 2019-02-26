import React from 'react';

import logo from '../../images/dronutbackground.jpg';

const Home = () => (
  <div>
    <img src={logo} className="mainImg" />
    <footer className="footer">
      <div className="container">
        <span className="text-muted">Dronuts Group 3</span>
      </div>
	</footer>
  </div>
)

export default Home;
