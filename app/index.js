import React from 'react'
import ReactDOM from 'react-dom'
import store, { increment } from './store'

class Counter extends React.Component {
  constructor () {
    super()
    this.state = store.getState()
    this.increment = this.increment.bind(this)
  }

  increment () {
    store.dispatch(increment())
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
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render( <Counter />, document.getElementById('app'))
