import React from 'react';
import './App.css';
import Main from './components/Main';
import { default as NavbarCustomer } from './components/customer/Navbar';
import { default as NavbarEmployee } from './components/employee/Navbar';
import { default as footer } from './components/Footer';

const navbar = window.location.pathname.includes("/employee") ? <NavbarEmployee /> : <NavbarCustomer />;

const App = () => (
  <div>
    {navbar}
    <Main />
    {footer}
  </div>
)

export default App;
