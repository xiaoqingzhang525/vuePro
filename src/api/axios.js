import axios from 'axios'

axios.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;chartset=UTF-8'
  return config
})
axios.interceptors.response.use(res => res)

return axios
