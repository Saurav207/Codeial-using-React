import {  FETCH_FRIENDS_SUCCESS } from '../actions/actionTypes';

const defaultProfileState = []; //whatever friends that will get from API these will inside in this  

export default function friends(state = defaultProfileState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return [...action.friends];
    default:
      return state;
  }
}