import axios from 'axios';
import router from './router.js'


const instance = axios.create({
  baseURL: 'http://cbims.org.cn:50000/',
  timeout: 3000,
});
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.interceptors.request.use(config => {
  if(localStorage.getItem('token')) {
    config.headers.token = "Bearer "+localStorage.getItem('token');
  }
  return config;
}, err => {
  return Promise.reject(err);
});
instance.interceptors.response.use(response => {
  switch(response.data.code) {
    case 90003:
    case 90004:
    case 90009:
      localStorage.removeItem('token');
      router.push({path:'/login'});
  }
  return response;
},
error => {
  return Promise.reject(error);
});

export default {
  getTableData(data) {
    return instance.get('api/link/scope/read', {
      params: {
        scope_name: data
      }
    })
  },

  postAddLink(data) {
    return instance.post('api/link/create', data);
  },

  postLogin(data) {
      return instance.post('/user/login', data);
  },

  linkConfirm(data) {
      return instance.post('api/link/confirm', data);
  },

  getlinkFile() {
      return instance.get('api/download/links',{
          responseType: 'blob'
      });
  },

  getElementFile() {
      return instance.get('api/download/elements', {
          responseType: 'blob'
      })
  }


}
