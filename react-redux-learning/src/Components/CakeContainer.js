import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes : {props.totalCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    totalCakes: state.totalCakes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CakeContainer)