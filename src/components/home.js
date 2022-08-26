import React from "react";

import { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import BidderList from "./BidderList";
import { CustomerDataProviderContext } from "../context/CustomerDataContext";
import Filter from "./Filter";
import Paginationn from "./Pagination";

const tableHeadings = ["#", "name", "premium", "phone", "Email", "max/min bid"];

function Home() {
  const { value } = useContext(CustomerDataProviderContext);
  const [selectedOption, setSelectedOption] = useState("maximum_bids");
  const [custumerData, setCustumerData] = useState(value);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10);
  useEffect(() => {
    if (value) {
      setCustumerData(value);
    }
  }, [value]);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectedBidsToggle = (val) => {
    console.log(val);
    if (val === "minimum_bids") {
      setCustumerData(value.reverse());
      setSelectedOption("minimum_bids");
    }
	if (val === "maximum_bids") {
		setCustumerData(value.reverse());
		setSelectedOption("maximum_bids");
	  }
  };

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = custumerData?.slice(indexOfFirstCustomer, indexOfLastCustomer);

  return (
    <React.Fragment>
      <Filter handleSelect={handleSelectedBidsToggle} option={selectedOption} />
      {custumerData && (
        <BidderList data={currentCustomers} tableHeadings={tableHeadings} />
      )}
	  <Paginationn
          customersPerPage={customersPerPage}
          totalCustomers={custumerData?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
    </React.Fragment>
  );
}

export default Home;
