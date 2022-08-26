import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { CustomerDataProviderContext } from "../context/CustomerDataContext";
import { Link } from "react-router-dom";
import "./BidderList.css";

const BidderList = (props) => {
  const { sortByMin } = useContext(CustomerDataProviderContext);
  console.log(sortByMin);
  return (
    <div className="table-container">
		<Table bordered hover>
      <thead>
        <tr>
          {props.tableHeadings.map((head) => {
            return <th key={head}>{head}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((da, i) => {
          return (
            <tr key={i}>
              <td>{i}</td>
              <td>
                <Link
                  to={{
                    pathname: `/${da.Customer.firstname}/${da.Customer.id}`,
                    userId: da.Customer.id,
                  }}
				  style={{textDecoration: 'none',color: 'black', fontWeight: '500'}}
                >
                 <div className="name-field">
					<div><img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=50&t=st=1661529511~exp=1661530111~hmac=f1eaddfb853a5ddee60c5b43883a78030b4f98962b4f53580874845b01a4eb98" alt="avatar" /></div>
					<div> {da.Customer.firstname}</div>
				 </div>
                </Link>
              </td>
              <td>
                <Badge bg="success">{da.Customer.hasPremium}</Badge>
              </td>
              <td>{da.Customer.phone}</td>
              <td>{da.Customer.email}</td>
              <td>
                {!sortByMin
                  ? Math.max(...da.Customer.bids)
                  : Math.min(...da.Customer.bids)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
	</div>
  );
};

export default BidderList;
