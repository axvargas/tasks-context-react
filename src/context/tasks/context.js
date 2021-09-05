import { createContext, useReducer } from 'react';
import TaskReducer from './reducer';
import { v4 } from 'uuid';
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {

  const initialState = {
    tasks: [
      {
        id: "1",
        title: 'Task 1',
        description: 'Task 1 description',
        dueDate: '2020-01-01',
        priority: 'low',
        status: 'todo'
      },
      {
        id: "2",
        title: 'Task 2',
        description: 'Task 2 description',
        dueDate: '2020-01-01',
        priority: 'low',
        status: 'todo'
      },
      {
        id: "3",
        title: 'Task 3',
        description: 'Task 3 description',
        dueDate: '2020-01-01',
        priority: 'low',
        status: 'todo'
      }
    ]
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: { ...task, id: v4(), status: 'todo' }
    })
  }

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    })
  }

  const editTask = (task) => {
    dispatch({
      type: 'EDIT_TASK',
      payload: task
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask: addTask,
        deleteTask: deleteTask,
        editTask: editTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}