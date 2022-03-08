const redux = require('redux')
const createStore = redux.createStore
// Action
const BUY_CAKE = 'BUT_CAKE'
{
  type: BUY_CAKE
  info: 'First redux action'
}
//action creactor
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}
// Reducer
const initialState = {
  totalCakes: 10
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      totalCakes: state.totalCakes - 1
    }
    default: return state
  }
}

const store = createStore(reducer)
console.log('Initial State: ', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State: ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
