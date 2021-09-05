import React, { useContext } from 'react'
import { TaskContext } from '../context/tasks/context'
import { Link } from 'react-router-dom'
const TaskList = () => {
  const { tasks, deleteTask, editTask } = useContext(TaskContext)

  const handleDelete = (id) => {
    deleteTask(id)
  }

  const handleToggle = (task) => {
    const newSatatus = task.status === 'todo' ? 'done' : 'todo'
    editTask({ ...task, status: newSatatus })
  }

  return (
    <>
      <div className="flex flex-wrap mb-6">
        <h2 className="w-full text-center text-white text-3xl font-bold">
          Tasks
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="w-6/12">
          {
            tasks.map(task => (
              <div className="bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4" key={task.id}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-black">{task.title}</h3>
                  <span className="text-gray-600">{task.createdAt}</span>
                </div>
                <p className="text-gray-700 text-base text-left">
                  {task.description}
                </p>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <button className={task.status === 'todo' ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" : "bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded"} onClick={() => handleToggle(task)}>
                      {task.status}
                    </button>
                  </div>
                  <div className="flex justify-end items-center">
                    <Link to={`/edit/${task.id}`}>
                      <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-4 mx-1 rounded">
                        Edit
                      </button>
                    </Link>

                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 mx-1 rounded" onClick={() => handleDelete(task.id)}>
                      Delete
                    </button>
                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TaskList
