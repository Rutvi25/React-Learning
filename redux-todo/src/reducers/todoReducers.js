const initialData = {
  listItems : []
}

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, data } = action.payload;
      return {
        ...state,
        listItems: [
          ...state.listItems,
          {
            id: id,
            data: data
          }
        ]
      }
    default: return state;
  }
}

export default todoReducers;