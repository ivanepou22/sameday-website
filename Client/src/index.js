import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/flatpickr.min.css';
import './assets/css/fullcalendar.min.css';
import './assets/css/jquery.timepicker.min.css';
import './assets/css/select2.min.css';
import './assets/css/simplebar.css';
import './assets/css/slick.css';
import './assets/css/style.min.css';
import './assets/css/custom.css';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


