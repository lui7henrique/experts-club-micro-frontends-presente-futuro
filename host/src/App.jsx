import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "dsl/Button";
import { System } from "./utils/loadComponents";

import "./index.scss";

const App = () => {
  const [system, setSystem] = useState(undefined);

  useEffect(() => {
    console.log(system);
  }, [system]);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <button
        onClick={() => {
          setSystem({
            url: "http://localhost:8081/remoteEntry.js",
            scope: "dsl",
            module: "./Button",
          });
        }}
      >
        Carregar módulo
      </button>
      <System system={system}></System>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
