CRS.factory('CrsService', function() {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var customers = [
		{ id: 0, number: '0847461', name: 'Pascal DeMilly', address: { street: '384 forest ave', city: 'Laguna Beach', state: 'CA', zip: '92651' } },
		{ id: 1, number: '0674633', name: 'Alberto Sanchez', address: { street: '765 Main st', city: 'Santa Ana', state: 'CA', zip: '90863' } },
		{ id: 2, number: '1847663', name: 'Maria Bertrand', address: { street: '5689 Grant ave #15A', city: 'Santa Ana', state: 'CA', zip: '90863' } },
	  ];

	  var contracts = [
	  	{ cust: 1, number: '0674633-11', amountFinanced: 1023.56, terms: 12, monthlyAmount: 101.23, currentBalance: 1023.56, nextDueDate: '04/01/14' },
	  	{ cust: 1, number: '0674633-11', amountFinanced: 2087.12, terms: 24, monthlyAmount:  91.56, currentBalance: 2087.12, nextDueDate: '04/01/14' },
	  ];

	  return {
		customerList: function() {
		  return customers;
		},
		contractList: function (cust) {
			return contracts;
		},
		selectedCustomer: function () {
			return customers[0];
		},
		selectedContract: function () {
			return contracts[0];
		},
	  }
});

// vim: :ai:ts=4:sw=4
