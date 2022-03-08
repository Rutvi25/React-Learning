const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: ''
}
// action-types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCESS = 'FETCH_USERS_SUCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
//action creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUserSuccess = users => {
  return {
    type: FETCH_USERS_SUCESS,
    payload: users
  }
}
const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: '',
        error: action.payload
      }
  }
}
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data.map(user => user.id)
        dispatch(fetchUserSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())