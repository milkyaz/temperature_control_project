import React, { useState } from "react";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [color, setColor] = useState("cold");
  const increase = () => {
    const temperature = temperatureValue + 1;
    if (temperature === 31) return;
    if (temperature >= 15) {
      setColor("hot");
    }

    setTemperatureValue(temperature);
  };
  const decrease = () => {
    const temperature = temperatureValue - 1;
    if (temperature === -31) return;
    if (temperature <= 15) {
      setColor("cold");
    }
    setTemperatureValue(temperature);
  };
  return (
    <div className="app-container ">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>
          {temperatureValue}&deg;C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increase()}>+</button>
        <button onClick={() => decrease()}>-</button>
      </div>
    </div>
  );
}

export { App };
