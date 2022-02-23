import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'John'
    }
    console.log('LifecycleA constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }
  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'LifeCycle Methods'
    })
  }
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>LifeCycleA</div> 
        <button onClick={this.changeState}>change state</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA