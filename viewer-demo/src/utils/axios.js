import axios from 'axios'
// import router from './../router/index'
// import {mapState} from '../store/index'

const http = axios.create({
  baseURL: 'http://192.168.0.199:8080/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 请求拦截器  发起请求前对请求参数做拦截处理
http.interceptors.request.use(
  config => {
    console.log('请求拦截res', config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器  接收到数据的时候对数据进行处理
http.interceptors.response.use(
  response => {
    console.log(response)
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
