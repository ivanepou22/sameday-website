import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/flatpickr.min.css';
import './assets/css/fullcalendar.min.css';
import './assets/css/jquery.timepicker.min.css';
import './assets/css/select2.min.css';
import './assets/css/simplebar.css';
import './assets/css/slick.css';
import './assets/css/style.min.css';
import './assets/css/custom.css';
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
