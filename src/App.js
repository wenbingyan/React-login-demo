import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ADD, MINUS,ASYNC  } from './index.redux';

@connect(
  (state)=>{
    return {num:state.counter}
  },
  {ADD, MINUS,ASYNC}
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>there are account is1 { this.props.num.aaa }</h1>  
          <button onClick={this.props.ADD}>+</button>
          <button onClick={this.props.MINUS}>-</button>
          <button onClick={this.props.ASYNC}>LATER +</button>
        </div>
      </div>    
    );
  }
}

export default App;



//  1 npm run eject
//  2 npm install babel-plugin-transform-decorators-legacy --save-dev
//  3 packages.json 
// "babel": {
//   "presets": [
//     "react-app"
//   ],
//   "plugins": ["transform-decorators-legacy"]
// },