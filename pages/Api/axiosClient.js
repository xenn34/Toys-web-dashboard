// src/axiosClient.js
import axios from "axios";

// Mã JWT của bạn
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJkMDUyMWQ1M2MzY2M5YmE0ZDU2OTIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzEwNzUyNTgsImV4cCI6MTczMTE2MTY1OH0.gq45UqxTosMM1Gz_tfGVhGL230zqd2PZhpzdJVJqy5w";

// Tạo một instance của axios với cấu hình mặc định
const axiosClient = axios.create({
  baseURL: "https://toy-kingdom-backend.onrender.com", // Địa chỉ API backend của bạn
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`, // Thêm mã xác thực vào header
  },
});

// Trả về axios client đã cấu hình
export default axiosClient;
