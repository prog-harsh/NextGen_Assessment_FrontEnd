import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomerDataProviderContext } from "../context/CustomerDataContext";
import "./BidderProfile.css";
const BidderProfile = (props) => {
  const params = useParams();
  const ctx = useContext(CustomerDataProviderContext);
  const { value } = ctx;
  const [customer, setCustomer] = useState();

  useEffect(() => {
    const customer = value.find(
      (customer) => customer.Customer.id === params.userId
    );
    setCustomer(customer);
    // console.log(customer.Customer);
  }, [params.userId, value]);

  // console.log(customer);
  return (
    customer && (
      <div>
        <div className="bidder-header">
          <h2>Bidder Profile</h2>
        </div>
        <div className="bidder-profile-container">
          <div className="bidder-profile-image">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=150&t=st=1661529511~exp=1661530111~hmac=f1eaddfb853a5ddee60c5b43883a78030b4f98962b4f53580874845b01a4eb98"
              alt="avatar"
            />
          </div>
          <div className="bidder-profile-info">
            <div className="bidder-profile-name">
              <h3>
                {customer.Customer.firstname} {customer.Customer.lastname}
              </h3>
            </div>
            <div className="bidder-profile-details">
              <div className="bidder-profile-detail">
                <h4>Has Premium:</h4>
                {customer.Customer.hasPremium? <h5>Yes</h5> : <h5>No</h5>}
              </div>
              <div className="bidder-profile-detail">
                <h4>Phone:</h4>
                <h5>{customer.Customer.phone}</h5>
              </div>
              <div className="bidder-profile-detail">
                <h4>Email:</h4>
                <h5>{customer.Customer.email}</h5>
              </div>
              <div className="bidder-profile-detail">
                <h4>Bid Id: </h4>
                <h5> {customer.Bid.id}</h5>
              </div>
              <div className="bidder-profile-detail">
                <h4>Car:</h4>
                <h5>{customer.Bid.carTitle}</h5>
              </div>
              <div className="bidder-profile-detail">
                <h4>Amount:</h4>
                <h5>${customer.Bid.amount}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BidderProfile;
