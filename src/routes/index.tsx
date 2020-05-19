import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SigIn';

import SignUp from '../pages/SigUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/singup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
