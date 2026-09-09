import { createContext, useContext, useState } from "react";
import { SearchContext } from "./SearchContext";

function Search() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a product..."
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
    </div>
  );
}

export default Search;
