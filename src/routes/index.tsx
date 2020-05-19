import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SigIn';
import SignUp from '../pages/SigUp';

import Dashboard from '../pages/Dashboard';
import CustomRoute from './CustomRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <CustomRoute path="/" exact component={SignIn} />
      <CustomRoute path="/singup" component={SignUp} />
      <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
