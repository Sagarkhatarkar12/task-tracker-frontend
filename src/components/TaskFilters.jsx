import React from 'react';

const TaskFilters = ({ search, setSearch, filterStatus, setFilterStatus, sortBy, setSortBy, onClear }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col sm:flex-row gap-3 items-center">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="dueDate">Sort by: Due date</option>
        <option value="priority">Sort by: Priority</option>
      </select>
      <button
        onClick={onClear}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
      >
        Clear
      </button>
    </div>
  );
};

export default TaskFilters;