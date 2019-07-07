import React from "react";
import SearchInput from "./SearchInput";
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
    <>
      <div className="form-group has-search searchgroup">
        <SearchInput
          searchTerm={searchTerm}
          searchTransactions={searchTransactions}
        />
      </div>
    </>
  );
};

export default Search;
