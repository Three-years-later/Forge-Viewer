// 封装网络请求
import axios from '../utils/axios'

/**
 * *获取令牌
 * **/
const getForgeAccessToken = (formData) => {
  const url = 'https://developer.api.autodesk.com/authentication/v1/authenticate'
  return axios.post(url, formData)
}

export {
  getForgeAccessToken
}
