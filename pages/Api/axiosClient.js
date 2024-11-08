// src/axiosClient.js
import axios from "axios";

// Tạo một instance của axios với cấu hình mặc định
const axiosClient = axios.create({
  baseURL: "https://toy-kingdom-backend.onrender.com", // Địa chỉ API backend của bạn
  headers: {
    "Content-Type": "application/json",
  },
});

// Trả về axios client đã cấu hình
export default axiosClient;
