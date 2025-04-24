import axios from "axios";
// instance
const axios_instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOSTNAME}/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

axios_instance.interceptors.request.use(
  (config) => {
    const token =
      JSON.parse(localStorage.getItem("user_slice") || "{}")?.access_token || null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  },
);

export { axios_instance };
