import React from "react";
import { lights, BatteryType } from "@lights/shared";

function App() {
  return (
    <div>
      <h1>Flashlight Collection</h1>
      <p>Total lights: {lights.length}</p>
      <p>Example battery type: {BatteryType.EIGHTEEN650}</p>
    </div>
  );
}

export default App;
