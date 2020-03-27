import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vue-auth';
import App from './App.vue';
import router from './router/';
import store from './store';
import Vuetify from 'vuetify';
import vuetify from '@/plugins/vuetify';
import moment from 'moment';
// import './scss/variables';

Vue.use(Vuetify, {
  iconfont: 'fa'
});

Vue.filter('formatDateHour', function(value) {
  if (moment(value).isValid()) {
    return moment(value).format('DD/MM/YYYY HH:mm');
  }
  return '';
});

Vue.filter('formatDate', function(value) {
  if (moment(value).isValid()) {
    return moment(value).format('DD/MM/YYYY');
  }
  return '';
});

Vue.filter('formatDateByISO', function(value) {
  if (moment(value).isValid()) {
    return moment(value)
      .add(3, 'hours')
      .format('DD/MM/YYYY');
  }
  return '';
});

Vue.filter('formatHour', function(value) {
  if (moment(value).isValid()) {
    return moment(value).format('HH:mm');
  }
  return '';
});

Vue.filter('projectImportStatus', function(value) {
  switch (value) {
    case 'opened':
      return 'Aberto';
    case 'processing':
      return 'Processando';
    case 'finished':
      return 'Finalizado';
    default:
      return '';
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
