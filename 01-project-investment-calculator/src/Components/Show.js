const Show = (props) => {
  const results = [];
  var principle = props.data.invetstmentAmount;
  for (var year = 1; year <= props.data.years; year++) {
    var finalAmount = (
      principle * Math.pow(1 + props.data.interestRate / 100, year)
    );

    var yearInterest = (finalAmount - principle);
    var totalInterest = (finalAmount - props.data.invetstmentAmount);
    
    const totalAmount = finalAmount + props.data.newInvestmentAmount;
    results.push({
      year,
      principle,
      yearInterest,
      totalInterest,
      totalAmount,
    });
    principle = finalAmount + props.data.newInvestmentAmount;
  }
  return (
    <div>
      <table>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>interest(year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
        <tbody>
          {results.map((data, index) => (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.principle}</td>
              <td>{data.yearInterest}</td>
              <td>{data.totalInterest}</td>
              <td>{data.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Show;
