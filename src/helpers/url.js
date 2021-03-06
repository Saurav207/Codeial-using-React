export const APIUrls = {
  login: () => `http://codeial.codingninjas.com:8000/api/v2/users/login`,
  signup: () => `http://codeial.codingninjas.com:8000/api/v2/users/signup`,
  editProfile: () => `http://codeial.codingninjas.com:8000/api/v2/users/edit`,
  fetchPosts: (page = 1, limit = 25) =>
    `http://codeial.codingninjas.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
  userProfile: (userId) =>
    `http://codeial.codingninjas.com:8000/api/v2/users/${userId}`,
  userFriends: () =>
    `http://codeial.codingninjas.com:8000/api/v2/friendship/fetch_user_friends`,
  addFriend: (userId) =>
    `http://codeial.codingninjas.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`,
  removeFriend: (userId) =>
    `http://codeial.codingninjas.com:8000/api/v2/friendship/remove_friendship?user_id=${userId}`,
};
