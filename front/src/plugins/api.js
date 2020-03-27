import Vue from 'vue';
import axios from 'axios';
import lscache from 'lscache';
import md5 from 'md5';

class AppApi {
  constructor() {
    this.instance = axios.create();
    lscache.flush();
  }

  call(action, method, data, fromCache) {
    fromCache = fromCache === true ? true : false;

    let url =
      process.env.VUE_APP_API_URL + (action[0] === '/' ? '' : '/') + action;

    let keyCache = null;

    let request = {
      method: method,
      url: url,
      headers: {
        Authorization: 'Bearer ' + Vue.auth.token()
      }
    };

    if (method === 'GET') {
      request.params = data;
      keyCache = md5(url + JSON.stringify(data));
    } else {
      request.data = data;
    }

    return new Promise((resolve, reject) => {
      if (fromCache === true && keyCache && lscache.get(keyCache)) {
        resolve(lscache.get(keyCache));
      } else {
        this.instance
          .request(request)
          .then(result => {
            if (fromCache === true && keyCache) {
              lscache.set(keyCache, result, 5);
            }
            resolve(result);
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  }

  // Users \\
  getUsers(data) {
    return this.call('/users', 'GET', data);
  }

  getUser(id) {
    return this.call(`/users/${id}`, 'GET');
  }

  postUser(data) {
    return this.call('/users', 'POST', data);
  }

  putUser(id, data) {
    return this.call(`/users/${id}`, 'PUT', data);
  }

  getUserContent() {
    return this.call('/content/user', 'GET');
  }

  deleteUser(id) {
    return this.call(`/users/${id}`, 'DELETE');
  }
}

const appApi = new AppApi();

export default appApi;
