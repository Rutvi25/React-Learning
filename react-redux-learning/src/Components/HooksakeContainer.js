import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksakeContainer() {
  const totalCakes = useSelector(state => state.totalCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes : {totalCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  )
}

export default HooksakeContainer