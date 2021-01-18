import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Switch,BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import './assets/styles/App.css';
import BaseModules from './module/index';

const meddlewares = BaseModules.getMiddlewares();
const reducers = BaseModules.getReducers();
const routes = BaseModules.getRoutes();
const navItems = BaseModules.getNavItems();
const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(...(meddlewares || [])),
);

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
      <div>{navItems}</div>
        <Switch>{routes}</Switch>
      </Router>
    </Provider>
  );
}

export default App;
