import React, { Component } from 'react';
import LoginForm from "../components/forms/LoginForm";

class LoginPage extends Component {
  state = {  }

  submit = (data) => {
    console.log(`Got data: ${data.email} & ${data.password}`);
  }

  render() {
    return (
      <div>
      <h2>Login</h2>
      <LoginForm submit={this.submit} />
    </div>
    );
  }
}

export default LoginPage;
