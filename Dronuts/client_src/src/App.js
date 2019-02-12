import React from 'react';
import './App.css';
import Main from './components/Main';
import { default as NavbarCustomer } from './components/customer/Navbar';
import { default as NavbarEmployee } from './components/employee/Navbar';

const navbar = window.location.pathname.includes("/employee") ? <NavbarEmployee /> : <NavbarCustomer />;

const App = () => (
  <div>
    {navbar}
    <div className="container-fluid">
      <Main />
    </div>
  </div>
)

export default App;
