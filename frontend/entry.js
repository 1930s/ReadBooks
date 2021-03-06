import React from 'react';
import ReactDOM from 'react-dom';
// //Components
import Root from './components/root';
import configureStore from './store/store';
import {signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let currentUser;
  if (window.currentUser) {
    currentUser = window.currentUser;
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} currentUser={currentUser} />, root);
})
