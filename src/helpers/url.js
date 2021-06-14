export const APIUrls = {
  login: () => `http://codeial.codingninjas.com:8000/api/v2/users/login`,
  signup:() =>  `http://codeial.codingninjas.com:8000/api/v2/users/signup`,
  fetchPosts: (page = 1, limit = 5) =>
    `http://codeial.codingninjas.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
};
