import React from "react";
import ReactDOM from "react-dom";
import Button from "dsl/Button";

import "./index.scss";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
      <Button />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
