import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
  }

  // the counter value in the UI will be incremented by 1 but in the console it will print the value for 5 times,
  // because react may group multiple setstate calls into single update for better performance. 
  // increment() {
  //   this.setState({
  //     count: this.state.count + 1
  //   }, () => {
  //     console.log('Callback value is', this.state.count)
  //   })
  //   console.log(this.state.count);
  // }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter