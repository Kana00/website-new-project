import * as moment from 'moment';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { ProviderIn, RouterIn } from './components/InjectionComponent/InjectionComponent';
import store from './redux/store/store';
const { I18n } = require('react-i18nify');

// set locality
const locality = navigator.language;
moment.locale(locality);
I18n.setLocale(locality);

ReactDOM.render(
  <ProviderIn store={store}>
    <RouterIn>
      <App />
    </RouterIn>
  </ProviderIn>,
  document.getElementById('root')
);
