import React, { useState } from "react";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const increase = () => {
    setTemperatureValue(temperatureValue + 1);
  };
  const decrease = () => {
    setTemperatureValue(temperatureValue - 1);
  };
  return (
    <div className="app-container ">
      <div className="temperature-display-container">
        <div className="temperature-display ">{temperatureValue}&deg;C</div>
      </div>
      <div className="button-container">
        <button onClick={() => increase()}>+</button>
        <button onClick={() => decrease()}>-</button>
      </div>
    </div>
  );
}

export { App };
