import router from '@/router'
import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  timeout: 5000
})

// 允许携带cookie
request.defaults.withCredentials = true
request.defaults.headers.post['Content-Type'] = 'application/json'

request.interceptors.request.use(
  (config: any) => {
    const UserToken = sessionStorage.getItem('token')
    if (UserToken) {
      config.headers.Authorization = UserToken
    } else {
      router.push({
        path: '/login'
      })
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  (res) => {
    const { status } = res
    if (status !== 200) {
      return Promise.reject(res)
    }
    return Promise.resolve(res)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
