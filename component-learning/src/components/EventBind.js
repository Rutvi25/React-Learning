import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    // binding in class constructor
    //this.clickHandler = this.clickHandler.bind(this)
  }
  // class property as an arrow function
  clickHandler=()=> {
    this.setState({
      message: 'Hello React!'
    })
    console.log(this)
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me!</button>*/}
        {/* <button onClick={() => this.clickHandler()}>Click me!</button> */}
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  }
}

export default EventBind