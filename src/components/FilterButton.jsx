import React from "react";

const filters = [
  "Merchant",
  "Team member",
  "Category",
  "Budget",
  "GST",
  "Amount"
];

const FilterButton = () => {
  return (
    <div className="dropdown">
      <button
        className="filterButton dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Filter
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <ul>
          {filters.map(f => (
            <li key={f} className="dropdown-item">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterButton;
