import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@pages/Home';
import ListBoilerPlate from '@pages/ListBoilerPlate';

const App = () => {
  /* eslint-disable */

  return (
    <>
      <Switch>
        <Route path='/boilerplates' component={ListBoilerPlate} />
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  );
};

export default App;
