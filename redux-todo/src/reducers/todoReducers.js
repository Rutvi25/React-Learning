const initialData = {
  listItems : []
}

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, data, todoCompletionStatus } = action.payload;
      return {
        ...state,
        listItems: [
          ...state.listItems,
          {
            id: id,
            data: data,
            todoCompletionStatus: todoCompletionStatus
          }
        ]
      }
    case 'CLEAR_TODO':
      const { todoDate, presentDate } = action;
      if(todoDate === presentDate) {
        return {
          ...state
        }
      }
      else {
        return {
          ...state,
          listItems: []
        }
      }
    case 'CHANGE_STATUS':
      return {
        ...state,
        listItems : state.listItems.map((listItem) => {
          if(listItem.id === action.id) {
            return {
              ...listItem,
              todoCompletionStatus: !listItem.todoCompletionStatus
            }
          }
          else {
            return listItem;            
          }
        })
      }
    default: return state;
  }
}

export default todoReducers;