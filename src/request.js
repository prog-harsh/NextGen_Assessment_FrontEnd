export const CustomersList = () => {
	return fetch("https://nex-g.herokuapp.com/")
	  .then((res) => res.json())
	  .then((res) => {
		return SortInDescendingOrderByBidAmount(res.Data);
	  })
	  .catch((e) => false);
  };

  //sort in descending order of amount
  

  const SortInDescendingOrderByBidAmount = (data) => {
	return data.sort((prevCustomer, nextCustomer) => {
	  return (
		Math.max.apply(
		  Math,
		  nextCustomer.Customer.bids.map(function (bid) {
			return bid;
		  })
		) -
		Math.max.apply(
		  Math,
		  prevCustomer.Customer.bids.map(function (bid) {
			return bid;
		  })
		)
	  );
	});
  };