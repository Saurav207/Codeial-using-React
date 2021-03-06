import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, startsignup, clearAuthState } from '../actions/auth';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name } = this.state;
    console.log('ABCD', this.state);
    if (email && password && confirmPassword && name) {
      // this.props.dispatch(startsignup());
      this.props.dispatch(signup(email, password, confirmPassword, name));
    }
  };
  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;

    if(isLoggedin) {
      return <Redirect to="/" />
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm-Password"
            required
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
          />
        </div>

        <div className="field">
          <button onClick={this.onFormSubmit} disabled={inProgress}>SignUp</button>
        </div>
      </form>
    );
  }
}
const mapStateToAuth = ({ auth }) => ({
  auth,
});

export default connect(mapStateToAuth)(Signup);
