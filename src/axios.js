import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 1000,
});
instance.defaults.headers.post['Content-Type'] = 'application/json'


export default {
  getTableData(data) {
    return instance.get('/link/scope/read', {
      params: {
        scope: data
      }
    })
  }
}
