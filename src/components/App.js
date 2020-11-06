import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ErrorBoundary from "./ErrorBoundary";
import Form from "./Form";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ErrorBoundary>
            <Dashboard />
          </ErrorBoundary>
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </>
  );
}

export default App;
