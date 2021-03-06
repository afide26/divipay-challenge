import React from "react";

const SearchInput = ({ searchTerm }) => {
  return (
    <>
      <span className="fas fa-search form-control-feedback" />
      <input type="text" className="form-control" placeholder="Search" />
    </>
  );
};

export default SearchInput;
