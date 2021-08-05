import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { customStore } from './utils/index';
import { history } from './redux/asyncReducers'

import Reducers from './redux/asyncReducers';
export const store = customStore(Reducers);

const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();