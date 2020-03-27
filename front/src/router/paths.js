import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export default [
  {
    path: '/',
    meta: {},
    name: 'Root',
    title: 'Login',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/login',
    meta: {
      public: true
    },
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    meta: { breadcrumb: true, auth: true },
    title: 'Dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
];
