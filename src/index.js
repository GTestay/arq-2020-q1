import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router";
import { createBrowserHistory } from 'history';

import App from './App';

import * as serviceWorker from './serviceWorker';

import axios from 'axios';

axios.defaults.baseURL = 'https://arq-2020-q1-grupo1-backend.herokuapp.com/';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
