var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  const reducer = (x, y) => {
    return x + y;
  }
  var companies = {};
  salesData.forEach(function(company) {
    if (companies[company.name]) {
      companies[company.name].totalSales += company.sales.reduce(reducer);
      companies[company.name].totalTaxes += company.sales.reduce(reducer)*taxRates[company.province];
    } else {
      companies[company.name] = {};
      companies[company.name].totalSales = company.sales.reduce(reducer)
      companies[company.name].totalTaxes = company.sales.reduce(reducer)*taxRates[company.province];
    }
  });
  return companies;
  // Implement your code here
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
