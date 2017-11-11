import React from 'react';
import { Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

const App = () => (
  <div className="ui container">
    <h1>BookWorm</h1>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
