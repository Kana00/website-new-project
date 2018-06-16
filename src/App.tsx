import * as React from 'react';
import { hot } from 'react-hot-loader';
import TitlePresentation from '../src/components/TitlePresentation/TitlePresentation';
import MainPage from '../src/routes/MainPage';
import { InjectionRoute, InjectionSwitch } from './components/InjectionComponent/InjectionComponent';

export const App = hot(module)(() => (
  <div>
    <TitlePresentation />
    <InjectionSwitch>
      <InjectionRoute path="/" component={MainPage} />
    </InjectionSwitch>
  </div>
));
