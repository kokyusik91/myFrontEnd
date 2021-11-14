import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LifeCycle from './components/LifeCycle';
import Brother from './components/Brother';
import Render from './components/Render';
import ReduxTest from './components/ReduxTest';
import UseRef from './components/UseRef';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={ReduxTest} />
      <Route path='/lifecycle' exact component={LifeCycle} />
      <Route path='/bro' exact component={Brother} />
      <Route path='/render' exact component={Render} />
      <Route path='/useref' exact component={UseRef} />
    </Switch>
  );
}

export default App;
