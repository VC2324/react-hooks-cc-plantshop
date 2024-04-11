import React from "react";

function Search({plants, setPlants, search, setSearch }) {
//  const filteredPlants = plants.filter (plants === search) 
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
        value={search}
      />
    </div>
  );
}

export default Search;
