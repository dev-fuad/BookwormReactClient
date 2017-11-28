import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import UserRoute from "./routes/UserRoute";
import GuestRoute from "./routes/GuestRoute";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ConfirmationPage from "./pages/Confirmation";
import DashboardPage from "./pages/Dashboard";
import ForgotPasswordPage from "./pages/ForgotPassword";
import ResetPasswordPage from "./pages/ResetPassword";
import NewBookPage from "./pages/NewBook";
import TopNavigation from "./components/navigation/TopNavigation";

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    <h1>BookWorm</h1>
    {isAuthenticated && <TopNavigation />}
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute location={location} path="/signup" exact component={RegisterPage} />
    <GuestRoute location={location} path="/forgot-password" exact component={ForgotPasswordPage} />
    <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
    <Route location={location} path="/reset_password/:token" exact component={ResetPasswordPage} />
    <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
    <UserRoute location={location} path="/books/new" exact component={NewBookPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
