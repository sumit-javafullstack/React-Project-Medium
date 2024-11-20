import { useState } from "react";
import "./Calculator.css";
// className="initial_amount"
// className="invesment_amount"



const Calculator = (props) => {
  const [data, setData] = useState(props.data);

  const inputHandler = (attributeName, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        [attributeName]: value,
      };
    });

    props.updateData(data)

  };
  console.log(data);

  return (
    <div className="calculator_body">
      <div className="amount">
        <div className="initial_amount">
          <p className="text_format">Initial Invesment</p>
          <input
            className="input_format"
            type="number"
            step="10000"
            value={data.invetstmentAmount}
            onChange={(event) =>
              inputHandler("invetstmentAmount", event.target.value)
            }
          />
        </div>
        <div>
          <p className="text_format">New Investment</p>
          <input
            className="input_format"
            type="number"
            step="500"
            value={data.newInvestmentAmount}
            onChange={(event) =>
              inputHandler("newInvestmentAmount", event.target.value)
            }
          />
        </div>
      </div>
      <div className="interest">
        <div>
          <p className="text_format">Percentage</p>
          <input
            className="input_format"
            type="number"
            value={data.interestRate}
            onChange={(event) => inputHandler("interestRate", event.target.value)}
          />
        </div>
        <div>
          <p className="text_format">Years</p>
          <input
            className="input_format"
            type="number"
            value={data.years}
            onInput={(event) => inputHandler("years", event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
