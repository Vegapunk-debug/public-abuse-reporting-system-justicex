// Connection btw frontend and Backend(Works as a proxy--better than fetch())

import axios from "axios"

const baseURL = import.meta.env.VITE_API_URL || '/api';

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
// export const axiosInstance = axios.create({
//   baseURL: "/api", 
//   headers: {
//     "Content-Type": "application/json",
//   },
// });