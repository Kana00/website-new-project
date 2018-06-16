import * as React from 'react';
import { hot } from 'react-hot-loader';
import TitlePresentation from '../src/components/TitlePresentation/TitlePresentation';
import RouteHandler from './routes/RouteHandler';

export const App = hot(module)(() => (
  <div>
    <TitlePresentation />
    <RouteHandler />
  </div>
));
