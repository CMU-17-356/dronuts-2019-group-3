import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Order from './Order';
import Test from './Test';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Test} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/order' component={Order} />
    </Switch>
  </main>
)

export default Main;
