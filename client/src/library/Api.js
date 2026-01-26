// Connection btw frontend and Backend(Works as a proxy--better than fetch())

import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    "Content-Type": "application/json",
  },
})