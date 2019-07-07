import React from "react";
import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";
import "../styles/input.css";

const filters = [
  "Merchant",
  "Team member",
  "Category",
  "Budget",
  "GST",
  "Amount"
];
const Search = ({ searchTerm, searchTransactions, allTransactions }) => {
  return (
    <div className="search-container">
      <div className="form-group has-search searchgroup">
        <SearchInput
          searchTerm={searchTerm}
          searchTransactions={searchTransactions}
        />
        <FilterButton filter={filters} />
      </div>
    </div>
  );
};

export default Search;
