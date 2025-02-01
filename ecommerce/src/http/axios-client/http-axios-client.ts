import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { axiosAuthInterceptor } from '../../http/gateway/interceptors/axios-auth'
import { BACKOFFICE_API_URL } from '../../config/urls'

export const httpAxiosClient = (): AxiosInstance => {
  axios.defaults.baseURL = BACKOFFICE_API_URL
  axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
  axios.interceptors.request.use(axiosAuthInterceptor)
  return axios
}
