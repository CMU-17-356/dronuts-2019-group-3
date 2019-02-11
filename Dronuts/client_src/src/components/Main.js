import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Locations from './Locations';
import Menu from './Menu';
import Order from './Order';
import Test from './Test';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Test} />
      <Route exact path='/about' component={About} />
      <Route exact path='/locations' component={Locations} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/order' component={Order} />
    </Switch>
  </main>
)

export default Main;
