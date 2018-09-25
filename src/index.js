import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Link, HashRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './App';
import { reducer } from './index.redux';
import thunk from 'redux-thunk'

function Page1(){
  return <div>page1</div>
}
function Page2(){
  return <div>page2</div>
}

const store = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store}>
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
        </ul>
        <Route path="/" exact component={App}></Route>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </div>
    </HashRouter>
  </Provider>, 
  document.getElementById('root')
)