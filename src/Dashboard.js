import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App';
import { logout } from './auth.redux'

@connect(
  state=>state.auth,
  {logout}
)
class Login extends Component {
  render() {
    const app = (    
      <div className="App">
        <button onClick={this.props.logout}>登出</button>
        <ul>
          <li>
            <Link to='/dashboard'>home</Link>
          </li>
          <li>
            <Link to="/dashboard/page1">page1</Link>
          </li>
          <li>
            <Link to="/dashboard/page2">page2</Link>
          </li>
        </ul>
        <Route path="/dashboard/" exact component={App}></Route>
        <Route path="/dashboard/page1" component={Page1}></Route>
        <Route path="/dashboard/page2" component={Page2}></Route>
      </div>    
    );
    return this.props.isLogin ? app : <Redirect to="/login"></Redirect>
  }
}

export default Login;

function Page1(){
  return <div>page1</div>
}
function Page2(){
  return <div>page2</div>
}
