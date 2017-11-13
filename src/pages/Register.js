import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import RegisterForm from "../components/forms/RegisterForm";
import { signup } from "../store/actions/register";

class RegisterPage extends Component {
  
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <RegisterForm submit={this.submit} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  signup : PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { signup })(RegisterPage);