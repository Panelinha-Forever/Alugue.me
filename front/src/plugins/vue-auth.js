import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import router from '../router';
Vue.router = router;

const authType = {
  request: function(req, token) {
    this.options.http._setHeaders.call(this, req, {
      Authorization:
        'Bearer ' +
        (req.url !== 'auth/refresh'
          ? token
          : localStorage.getItem('refresh_token'))
    });
  },

  response: function(res) {
    let token = null;
    if (res && 'data' in res && 'token' in res.data) {
      token = res.data.token;
      localStorage.setItem('refresh_token', res.data.refreshToken);
    }
    if (token) {
      token = token.split(/Bearer:?\s?/i);
      return token[token.length > 1 ? 1 : 0].trim();
    }
  }
};

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
Vue.use(VueAuth, {
  parseUserData: function(data) {
    return data;
  },
  auth: authType,
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});
