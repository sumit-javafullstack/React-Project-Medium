import "./App.css";
import Headers from "./Components/Headers";
import Calculator from "./Components/Calculator";
import Results from "./Components/Results";
import { useState } from "react";
import Show from "./Components/Show";

function App() {
  const investmentDetails = {
    invetstmentAmount: 10000,
    newInvestmentAmount: 1500,
    interestRate: 6,
    years: 10,
  };

  const [record, setRecord] = useState(investmentDetails);
  function userInvementDetails(newrecord) {
    setRecord(newrecord);
    console.log("Test " + record);
  }

  return (
    <div className="parent">
      <div>
        <Headers />
      </div>

      <div>
        <Calculator data={investmentDetails} updateData={userInvementDetails} />
        <Show data={record} />
      </div>
      <div>
        <Results />
      </div>
    </div>
  );
}

export default App;
