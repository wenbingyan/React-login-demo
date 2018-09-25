import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { HashRouter, Route, Redirect, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import reducers from './reducer';
import thunk from 'redux-thunk'
import Login from './Login'
import Dashboard from './Dashboard'

const store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </HashRouter>
  </Provider>, 
  document.getElementById('root')
)