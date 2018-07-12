const store = (state = [], action) => {
  switch(action.type) {
    case 'ADD_JOBS':
      return state.concat(action.jobs)
    default:
      return state
  }
}

export default store