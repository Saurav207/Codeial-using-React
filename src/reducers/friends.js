import {
  FETCH_FRIENDS_SUCCESS,
  ADD_FRIEND,
  REMOVE_FRIEND,
} from '../actions/actionTypes';

const defaultProfileState = []; //whatever friends that will get from API these will inside in this

export default function friends(state = defaultProfileState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return [...action.friends];
    case ADD_FRIEND:
      //add friend into this array which is coming from API
      return state.concat(action.friend);
    case REMOVE_FRIEND:
      const newArr = state.filter((friend) => friend.to_user._id !== action.userId);
      return newArr;
    default:
      return state;
  }
}
