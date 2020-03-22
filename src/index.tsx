import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { Provider } from "react-redux";

const history = createBrowserHistory();
const store = configureStore({}, history);
const locales = ['en', 'uk'];

if (locales.indexOf(localStorage.getItem("locale") || '') < 0) {
  const index = locales.indexOf(navigator.language.split(/[-_]/)[0]);
  localStorage.setItem("locale", locales[index > -1 ? index : 0]);
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router history={ history }>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
