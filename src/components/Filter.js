import React from "react";

const Filter = ({ filter, setFilter }) => {
  const resetFilters = () => {
    setFilter({
      title: "",
      location: "",
      type: "",
      date: "",
    });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <input
          type="text"
          placeholder="Search by title"
          value={filter.title}
          onChange={(e) => setFilter({ ...filter, title: e.target.value })}
          className="mb-4 md:mb-0 p-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
          className="mb-4 md:mb-0 p-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* <select
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          className="mb-4 md:mb-0 p-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="Yoga">Yoga</option>
          <option value="meditation">meditation</option>
          <option value="diet">diet</option>
            <option value="flexibility">flexibility</option>
        </select> */}
      </div>
      <div className="flex items-center mt-4 space-x-4">
        <input
          type="date"
          value={filter.date}
          onChange={(e) => setFilter({ ...filter, date: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={resetFilters}
          className="p-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
