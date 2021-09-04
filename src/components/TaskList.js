import React, { useContext } from 'react'
import { TaskContext } from '../context/tasks/context'

const TaskList = () => {

  const context = useContext(TaskContext)
  console.log(context)
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap mb-6">
        <h2 className="w-full text-center text-white text-3xl font-bold">
          Add a new task
        </h2>
      </div>
      <div className="w-6/12">
        {
          context.tasks.map(task => (
            <div className="bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4" key={task.id}>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-black">{task.title}</h3>
                <span className="text-gray-600">{task.createdAt}</span>
              </div>
              <p className="text-gray-700 text-base text-left">
                {task.description}
              </p>
              <div className="flex justify-end items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mx-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 mx-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TaskList
