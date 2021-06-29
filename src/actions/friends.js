import { APIUrls } from "../helpers/url"
import { getAuthTokenLocalStorage } from "../helpers/utils"
import { FETCH_FRIENDS_SUCCESS } from "./actionTypes";

export function fetchUserFriends(userId) {
    return (dispatch) => {
        const url = APIUrls.userFriends(userId);
        fetch(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenLocalStorage()}`,
              },

        })
        .then((response) => response.json()) 
        .then((data) => {
            console.log('data', data);
            dispatch(fetchFriendSuccess(data.data.friends));
        })
    }
}

export function fetchFriendSuccess(friends) {
    return {
        type: FETCH_FRIENDS_SUCCESS, 
        friends,
    }
}