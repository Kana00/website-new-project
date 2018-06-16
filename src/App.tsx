import * as React from 'react';
import { hot } from 'react-hot-loader';
import TitlePresentation from '../src/components/TitlePresentation/TitlePresentation';
import MainPage from '../src/routes/MainPage';
import { InjectionRoute } from './components/InjectionComponent/InjectionComponent';
import SecondPage from './routes/SecondPage';

export const App = hot(module)(() => (
  <div>
    <TitlePresentation />
    <InjectionRoute exact path="/" component={MainPage} />
    <InjectionRoute exact path="/SecondPage" component={SecondPage} />
  </div>
));
