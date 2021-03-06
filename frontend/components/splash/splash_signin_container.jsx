import {connect} from 'react-redux';
import React from 'react';
import {signin} from '../../actions/session_actions';
import SplashSignInForm from './splash_signin_form';


const mapStateToProps = (state, ownProps) => ({
  formType: "Sign In",
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signin(user))
});

const SplashSignInContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SplashSignInForm);

export default SplashSignInContainer;
