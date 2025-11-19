import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search-wrap">
      <input
        className="search-input"
        type="search"
        placeholder="Search by creator"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
