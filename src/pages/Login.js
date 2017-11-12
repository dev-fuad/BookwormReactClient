import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import LoginForm from "../components/forms/LoginForm";
import { login } from "../store/actions/auth";

class LoginPage extends Component {
  state = {  }

  submit = (data) =>
    this.props.login(data)
        .then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
      <h2>Login</h2>
      <LoginForm submit={this.submit} />
    </div>
    );
  }
}

LoginPage.propTypes = {
  login  : PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { login })(LoginPage);
