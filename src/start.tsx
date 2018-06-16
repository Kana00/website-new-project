import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { ProviderIn, RouterIn } from './components/InjectionComponent/InjectionComponent';
import store from './redux/store/store';


ReactDOM.render(
  <ProviderIn store={store}>
    <RouterIn>
      <App />
    </RouterIn>
  </ProviderIn>,
  document.getElementById('root')
);
