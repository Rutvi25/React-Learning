import { BUY_CAKE } from "./cakeTypes"

const initialState = {
  totalCakes: 10
}
const cakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state, 
      totalCakes: state.totalCakes - 1
    }
    default: return state
  }
}
export default cakeReducer