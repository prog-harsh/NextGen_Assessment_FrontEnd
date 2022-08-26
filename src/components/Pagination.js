import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginationn = ({
  customersPerPage,
  totalCustomers,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        onClick={() => paginate(i)}
        active={i === currentPage}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination>{pageNumbers}</Pagination>
    </div>
  );
};

export default Paginationn;
