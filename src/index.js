import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard  from './Dashboard.js';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
