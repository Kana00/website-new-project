import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import MainPage from '../src/routes/MainPage';

export const App = hot(module)(() => (
  <div>
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </div>
));
