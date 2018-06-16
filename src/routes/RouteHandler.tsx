import * as React from 'react';
import { InjectionRoute, InjectionSwitch } from '../components/InjectionComponent/InjectionComponent';
import MainPage from './MainPage';
import NoMatch from './NoMatch';
import SecondPage from './SecondPage';

export default class RouteHandler extends React.Component<{},{}> {
  render() {
    return (
      <InjectionSwitch>
        <InjectionRoute exact={true} path='/' component={MainPage} />
        <InjectionRoute exact={true} path='/SecondPage' component={SecondPage} />
        <InjectionRoute component={NoMatch} />
      </InjectionSwitch>
    );
  }
}
