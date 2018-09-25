import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { login } from './auth.redux'

@connect(
  state=>state.auth,
  {login}
)
class Login extends Component {
  render() {
    return (
      <div className="App">
        {this.props.isLogin? <Redirect to="/dashboard"></Redirect> : null}
        <h2>没有权限，请登录</h2>
        <button onClick={this.props.login}>登录</button>
      </div>    
    );
  }
}

export default Login;

