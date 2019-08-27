import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route>
            <h1>Hello, World!</h1>

            <SignUpForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
