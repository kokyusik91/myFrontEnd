import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LifeCycle from './components/LifeCycle';
import Brother from './components/Brother';
import Render from './components/Render';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={LifeCycle} />
      <Route path='/bro' exact component={Brother} />
      <Route path='/render' exact component={Render} />
    </Switch>
  );
}

export default App;
