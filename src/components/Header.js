import React from 'react'
import { Link } from 'react-router-dom';
import { IoAdd } from 'react-icons/io5';
const Header = () => {
  return (
    <div>
      <div className="flex item-center mb-10">
        <div className="flex items-center">
          <Link to='/'>
            <h5 className="text-gray-100 font-bold text-2x1">Task App</h5>
          </Link>
        </div>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <IoAdd className="mr-2" />
              Add Task
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header
