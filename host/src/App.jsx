import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./Error";

import "./index.scss";
import { Page } from "./Main";

const RemoteButton = React.lazy(() => import("dsl/Button"));

const App = () => {
  return (
    <Page>
      <Suspense fallback="Loading..">
        <ErrorBoundary>
          <RemoteButton />
        </ErrorBoundary>
      </Suspense>
    </Page>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
