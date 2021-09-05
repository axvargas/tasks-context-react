export default function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, payload]
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload)
      }
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === payload.id ? { ...task, ...payload } : task)
      }
    default:
      return state
  }
}