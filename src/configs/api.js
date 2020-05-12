import axios from 'axios'

export default axios.create({
  baseURL: `https://api.covid19api.com/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})