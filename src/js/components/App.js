import React from "react";
import Dispenser from "./Dispenser";
import StatusList from "./StatusList";
import Form from "./Form";
import Temperature from "./Temperature";

const App = () => (
  <>
    <div className="dispenser">
      <div className="dispenserButtons">
        <h1>Drinks Dispenser</h1>
        <Form />
      </div>
      <div className="statusPanel">
        <h2>Selection Store (Server returned)</h2>
        <StatusList />
      </div>
      <div className="statusPanel">
        <h2>Status Panel</h2>
        <Dispenser />
      </div>
      <div className="statusPanel">
        <h2>Temperature readings</h2>
        <Temperature />
      </div>
    </div>
  </>
);

export default App;