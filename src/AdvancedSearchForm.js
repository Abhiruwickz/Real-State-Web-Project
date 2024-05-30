import React, { useState } from "react";

//Advanced search form functions
const AdvancedSearchForm = ({ onSearch, onClose,data }) => {
  const [type, setType]= useState ("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [dateAdded, setDateAdded] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = {
      type,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
      dateAdded,
    };
    onClose();
    

    const isSearchCriteriaProvided = Object.values(searchData).some((value)=> value !=="");
    if (isSearchCriteriaProvided) {
      const filteredProperties = data.filter((property) => {
        return (
          (!searchData.type || property.type === searchData.type) &&
          (isNaN(searchData.minPrice) || property.price >= searchData.minPrice) &&
          (isNaN(searchData.maxPrice) || property.price <= searchData.maxPrice) &&
          (isNaN(searchData.minBedrooms) || property.bedrooms >= searchData.minBedrooms) &&
          (isNaN(searchData.maxBedrooms) || property.bedrooms <= searchData.maxBedrooms) &&
          (!searchData.dateAdded || property.dateAdded === searchData.dateAdded)
        );
      });
      
      console.log('Filtered properties', filteredProperties);
      onSearch(filteredProperties);
      
    }
    else {
      alert("Please enter search criteria");
    }
   
  };

  return (
    // Advanced search form
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">Property Type : </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Apartment">apartment</option>
          <option value="House">house</option>
          <option value="Flat">flat</option>
        </select>
      </div>
      <div>
        <label htmlFor="minPrice">Min Price : </label>
        <input
          id="minPrice"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="maxPrice">Max Price : </label>
        <input
          id="maxPrice"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="minBedrooms">Min Bedrooms : </label>
        <input
          id="minBedrooms"
          type="number"
          value={minBedrooms}
          onChange={(e) => setMinBedrooms(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="maxBedrooms">Max Bedrooms : </label>
        <input
          id="maxBedrooms"
          type="number"
          value={maxBedrooms}
          onChange={(e) => setMaxBedrooms(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateAdded">Date Added : </label>
        <input
          id="dateAdded"
          type="date"
          value={dateAdded}
          onChange={(e) => setDateAdded(e.target.value)}
        />
      </div>
      <button className="Search" type="submit">Search</button>
      <button className="Close" onClick={onClose}>Cancel</button>
    
    </form>
  );
};

export default AdvancedSearchForm;



