export const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Math.random(),
      data: data, 
      todoCompletionStatus: false
    }
  }
}
export const clearStorage = (data) => {
  return {
    type: 'CLEAR_STORAGE',
    data: data
  }
}
export const changeStatus = (id) => {
  return {
    type: 'CHANGE_STATUS', 
    id: id,
  }
}