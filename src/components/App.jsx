import React, { useState } from "react";
import $ from "jquery";

function App() {
  const [terms, setTerms] = useState({
    mortAmount: null,
    mortPeriod: null,
    intRate: null,
    purchasePrice: null,
    monthlyRent: null,
    monthlyExpenses: null
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTerms(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  // function addCommas(nStr) {
  //   nStr += '';
  //   let x = nStr.split('.');
  //   let x1 = x[0];
  //   let x2 = x.length > 1 ? '.' + x[1] : '';
  //   var rgx = /(\d+)(\d{3})/;
  //   while (rgx.test(x1)) {
  //     x1 = x1.replace(rgx, '$1' + ',' + '$2');
  //   }
  //   return x1 + x2;
  // }

  // $('.datainto').keyup(function () {
  //     var value = $(this).val().replace(/,/g,'');
  //     console.log(value);
  //     $(this).val(addCommas(value));
  // });

  return (
    <div className="container">
      <h1>Cap Rate Calculator</h1>
      <br />
      <form>
        <input
          onChange={handleChange}
          name="purchasePrice"
          value={terms.purchasePrice}
          placeholder="Purchase Price ($)"
          type="number"
        />
        <input
          onChange={handleChange}
          name="mortAmount"
          value={terms.mortAmount}
          placeholder="Total Mortgage Amount ($)"
          type="number"
        />
        <input
          onChange={handleChange}
          name="mortPeriod"
          value={terms.mortPeriod}
          placeholder="Mortgage Period (Years)"
          type="number"
        />
        <input
          onChange={handleChange}
          name="interestRate"
          value={terms.interestRate}
          placeholder="Interest Rate (%)"
          type="number"
        />
        <input
          onChange={handleChange}
          name="monthlyRent"
          value={terms.monthlyRent}
          placeholder="Monthly Rental Income ($)"
          type="number"
        />
        <input
          onChange={handleChange}
          name="monthlyExpenses"
          value={terms.monthlyExpenses}
          placeholder="Monthly Expenses ($)"
          type="number"
        />
        <h2>Mortgage Payment (Monthly)</h2>
        <h2>
          $
          {(
            (terms.mortAmount *
              (terms.interestRate / 1200) *
              Math.pow(1 + terms.interestRate / 1200, terms.mortPeriod * 12)) /
            (Math.pow(1 + terms.interestRate / 1200, terms.mortPeriod * 12) - 1)
          ).toFixed(2)}
        </h2>
        <h2>NOI (Annual)</h2>
        <h2>${(terms.monthlyRent - terms.monthlyExpenses) * 12}</h2>
        <h2>Cap Rate (Annual)</h2>
        <h2>
          {(
            (((terms.monthlyRent - terms.monthlyExpenses) * 12) /
              terms.purchasePrice) *
            100
          ).toFixed(2)}
          %
        </h2>
      </form>
    </div>
  );
}

export default App;
