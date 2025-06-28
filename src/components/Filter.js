// src/components/Filter.js
import React from "react";

const Filter = ({ setFilterColor }) => {
  const handleFilterChange = (e) => {
    setFilterColor(e.target.value);
  };

  return (
    <div className="filter">
      <label>Filter by Color: </label>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="#ffcccc">Red</option>
        <option value="#ccffcc">Green</option>
        <option value="#ccccff">Blue</option>
      </select>
    </div>
  );
};

export default Filter;
