import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true, // allows refreshToken cookie
});

// 🔹 Attach token from localStorage before requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔹 Auto-refresh token if expired
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/refresh",
          {},
          { withCredentials: true }
        );

        const newToken = res.data.accessToken;
        localStorage.setItem("accessToken", newToken);

        error.config.headers.Authorization = `Bearer ${newToken}`;
        return API(error.config); // retry failed request
      } catch (err) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login"; // force logout
      }
    }
    return Promise.reject(error);
  }
);

export default API;
