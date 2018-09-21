import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD, MINUS,ASYNC  } from './index.redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>there are account is1 { this.props.num.aaa }</h1>  
        <button onClick={this.props.ADD}>+</button>
        <button onClick={this.props.MINUS}>-</button>
        <button onClick={this.props.ASYNC}>LATER +</button>
      </div>
    );
  }
}
const stateToProps = (state)=>{
  console.log(state)
  return {num:state}
}
const actionToProps = {ADD, MINUS,ASYNC}
App = connect(stateToProps,actionToProps)(App)
export default App;
