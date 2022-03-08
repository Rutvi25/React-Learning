const redux = require('redux')
// redux middleware
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const createStore = redux.createStore
const combineReducers = redux.combineReducers

// Action
const BUY_CAKE = 'BUT_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
//action creactor
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'buy ice cream'
  }
}
// Reducer
// const initialState = {
//   totalCakes: 10,
//   totalIceCream: 20
// }
// initial state for cake
const initialCakeState = {
  totalCakes: 10
}
// initial state for ice cream
const initialIceCreamState = {
  totalIceCream: 20
}
// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       totalCakes: state.totalCakes - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       totalIceCream: state.totalIceCream - 1
//     }
//     default: return state
//   }
// }
// Reducer for Cake State
const CakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      totalCakes: state.totalCakes - 1
    }
    default: return state
  }
}
// Reducer for Cake State
const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      totalIceCream: state.totalIceCream - 1
    }
    default: return state
  }
}
// combining reducers
const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State: ', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()