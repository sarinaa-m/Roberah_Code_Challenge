import axios from "axios";


const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 10000, // optional
  headers: { 'Content-Type': 'application/json' }
});

// Add request interceptors if needed
// axiosInstance.interceptors.request.use(
//   config => {
//     // Add authorization token or other custom headers here
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

// Add response interceptors if needed
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally
    if (error.response.status === 401) {
      // Redirect to login or handle unauthorized access
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;