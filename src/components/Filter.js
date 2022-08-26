import React, { useContext } from "react";
import "./Filter.css";
import { CustomerDataProviderContext } from "../context/CustomerDataContext";
const Filter = ({ handleSelect, option }) => {
  const { setBiddingSortingOrder } = useContext(CustomerDataProviderContext);

  return (
    <React.Fragment>
      <div className="filter">
        <h5>Filters</h5>
        <div className="filter-container">
          <div className="filter-item">
            <label>Filter by:</label>
            <select
              onChange={(e) => handleSelect(e.target.value)}
              value={option}
            >
              <option value="maximum_bids">Maximum Bids</option>
              <option value="minimum_bids">Minimum Bids</option>
            </select>
          </div>
          <div
            className="filter-item"
            title="Toggle between the maximum and minimum bid of a customer"
          >
            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) => setBiddingSortingOrder()}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filter;
