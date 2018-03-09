import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard  from './Dashboard.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
