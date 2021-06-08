import { LOGIN_START } from './actionTypes';
import { APIUrls } from '../helpers/url';
import {getFormBody} from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}


// '/login?email=a@g.com&password=12344'
export function login(email, password) {
  return (dispatch) => {
    //since it is asynchronous action so we  will return function
    const url = APIUrls.login();
    fetch(url, {
      //currently by default it is GET type request  so mmake it POST type
      method: 'POST',
      //whatever data we are sending to the server in a particular format so 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

      },
      body: getFormBody({email, password}),
    });
  };
}
