export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); //aakash 123 => aakash%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&'); //'username=sanju&password=12345'
}

export function getAuthTokenLocalStorage() {
  return localStorage.getItem('token');
}