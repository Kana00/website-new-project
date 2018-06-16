import * as React from 'react';
import { RouteIn, SwitchIn } from '../components/InjectionComponent/InjectionComponent';
import MainPage from './MainPage';
import NoMatch from './NoMatch';
import SecondPage from './SecondPage';

export default class RouteHandler extends React.Component<{},{}> {
  render() {
    return (
      <SwitchIn>
        <RouteIn exact={true} path='/' component={MainPage} />
        <RouteIn exact={true} path='/SecondPage' component={SecondPage} />
        <RouteIn component={NoMatch} />
      </SwitchIn>
    );
  }
}
