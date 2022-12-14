import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signup_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)