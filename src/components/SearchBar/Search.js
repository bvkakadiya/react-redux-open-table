import React, { useState } from "react";
import TextInput from "../common/TextInput";

const Search = ({ searchRestaurant, filterRestaurant, restaurants }) => {
  const [text, setText] = useState("");
  const [filterText, setFilterText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchRestaurant(text);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onFilterChange = (e) => {
    e.preventDefault();
    setFilterText(e.target.value);
    filterRestaurant(e.target.value);
  };

  return (
    <div className="search-container">
      <TextInput
        className="search-text"
        name="text"
        placeholder={"Search Restaurants with city name...."}
        value={text}
        onChange={onChange}
      />
      <input
        className="search-btn"
        onClick={onSubmit}
        type="submit"
        value="Search"
        className="btn btn-dark btn-block"
      />

      <TextInput
        className="filter-text"
        name="filterText"
        placeholder={"Filter Restaurants with Name, Address, Area...."}
        value={filterText}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Search;
