import React, { useState } from "react";
import App from "./App";

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [stepDataDiri, setStepDataDiri] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [page, setPage] = useState(1);

  function submitData() {}
  return (
    <div>
      <multiStepContext.Provider
        value={{
          stepDataDiri,
          setStepDataDiri,
          userData,
          setUserData,
          finalData,
          setFinalData,
          page,
          setPage,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
