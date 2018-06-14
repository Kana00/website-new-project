import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import TitlePresentation from './components/TitlePresentation/TitlePresentation';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={TitlePresentation} />
  </Switch>
));
