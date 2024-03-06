import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import { store } from './store/store'
import { getTicketsToDispatch } from './functions'
import App from './components/App/App'
import { addTickets, setLoader } from './store/actions'
import './index.css';

getTicketsToDispatch(store, addTickets, setLoader)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

