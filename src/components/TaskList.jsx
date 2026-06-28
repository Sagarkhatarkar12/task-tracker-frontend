import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskList = ({ tasks, onEdit, onDelete, totalTasks, displayedCount }) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-green-100 text-green-700',
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No tasks found</p>
      ) : (
        tasks.map(task => (
          <div key={task._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 p-4 last:border-0">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
              <p className="text-gray-600 text-sm">{task.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
                  {task.priority}
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  {task.status}
                </span>
                <span className="text-xs text-gray-500">
                  {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-2 sm:mt-0">
              <button onClick={() => onEdit(task)} className="text-gray-500 hover:text-blue-600 transition">
                <FaEdit />
              </button>
              <button onClick={() => onDelete(task._id)} className="text-gray-500 hover:text-red-600 transition">
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
      <div className="text-center text-sm text-gray-500 py-3 border-t border-gray-100">
        Showing {displayedCount} of {totalTasks} tasks
      </div>
    </div>
  );
};

export default TaskList;