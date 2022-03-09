import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  totalIceCreams: 20
}
const iceCreamReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state, 
      totalIceCreams: state.totalIceCreams - 1
    }
    default: return state
  }
}
export default iceCreamReducer