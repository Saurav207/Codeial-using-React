import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        inProgress: false,
        error: null,
      };
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    default:
      return state;
  }
}

// const initialAuth2state = {
//   user: {},
//  error: null,
//  issignup: false,
//  upProgress: false,
// }
// export function auth2(state = initialAuth2state, action) {
//   switch(action.type) {
//     case SIGNUP_START:
//       return{
//         ...state,
//         upProgress: true,

//     };

//     case SIGNUP_SUCCESS:
//       return{
//         ...state,
//         upProgress: true,

//     };

//     case SIGNUP_FAILED:
//       return{
//         ...state,
//         upProgress:

//     };
//     default:
//       return state;
//   }
// }
