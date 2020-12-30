import React from 'react'
import ReactDOM from 'react-dom'
import store, { increment, decrement } from './store'

class Counter extends React.Component {
  constructor () {
    super()
    this.state = store.getState()
  }

  increment () {
    store.dispatch(increment())
  }
  decrement () {
    store.dispatch(decrement())
  }

  componentDidMount () {
    const unsubscribeCB = store.subscribe(() => this.setState(store.getState()))
    this.unsubscribe = unsubscribeCB
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <div id='container'>
        <div id='counter'>
          <button onClick={this.increment}>+</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render( <Counter />, document.getElementById('app'))
