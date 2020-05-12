import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.covid19api.com/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getSummary() {
    return apiClient.get('/summary')
  },
  getCountries() {
    return apiClient.get('/countries')
  }
}
