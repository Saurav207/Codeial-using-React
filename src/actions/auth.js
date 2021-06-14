import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from './actionTypes';
import { APIUrls } from '../helpers/url';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginsuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginfailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

// '/login?email=a@g.com&password=12344'
export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    //since it is asynchronous action so we  will return function
    const url = APIUrls.login();
    fetch(url, {
      //currently by default it is GET type request  so mmake it POST type
      method: 'POST',
      //whatever data we are sending to the server in a particular format so
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          //dispatch action to save user
          dispatch(loginsuccess(data.data.user));
          return;
        }
        dispatch(loginfailed(data.message));
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function signup(email, password, confirmPassword, name) {
  console.log('email', email);
  return (dispatch) => {
    //dispatch(startsignup());
    //since this is ansynchronous action so this will return function
    const url = APIUrls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirmPassword,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          //do something
          localStorage.setItem('token', data.data.token);
          dispatch(signupsuccess(data.data.user));
          return;
        }
        dispatch(signupfailed(data.message));
      });
  };
}

export function startsignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupsuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function signupfailed(errorMessage) {
  return {
    type: SIGNUP_FAILED,
    error: errorMessage,
  };
}
