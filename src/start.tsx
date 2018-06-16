import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { InjectionProvider, InjectionRouter } from './components/InjectionComponent/InjectionComponent';
import store from './redux/store/store';


ReactDOM.render(
  <InjectionProvider store={store}>
    <InjectionRouter>
      <App />
    </InjectionRouter>
  </InjectionProvider>,
  document.getElementById('root')
);
