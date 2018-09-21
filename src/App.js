import React, { Component } from 'react'

class App extends Component {
  render() {
    const store = this.props.store
    const ADD = this.props.ADD
    const MINUS = this.props.MINUS
    const ASYNC = this.props.ASYNC
    const num = store.getState()
    return (
      <div className="App">
        <h1>there are account is1 { num }</h1>  
        <button onClick={()=>{store.dispatch(ADD())}}>+</button>
        <button onClick={()=>{store.dispatch(MINUS())}}>-</button>
        <button onClick={()=>{store.dispatch(ASYNC())}}>LATER +</button>
      </div>
    );
  }
}

export default App;
