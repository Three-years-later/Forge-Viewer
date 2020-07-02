// 封装网络请求
import axios from '../utils/axios'

/**
 * *获取令牌
 * **/
const getForgeAccessToken = (formData) => {
  const url = 'https://developer.api.autodesk.com/authentication/v1/authenticate'
  return axios.post(url, formData)
}

/**
 * *创建存储桶
 * **/
const getForgeCreateBucket = (formData) => {
  const url = 'https://developer.api.autodesk.com/oss/v2/buckets'
  return axios.post(url, formData)
}

export {
  getForgeAccessToken,
  getForgeCreateBucket
}
