import axios from 'axios'

const db = axios.create({
  baseURL: "http://localhost:3333/",
  timeout: 1000,
})

export default db