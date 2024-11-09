import axiosClient from "../Api/axiosClient"; // Import axiosClient

// Gửi yêu cầu lấy thông tin người dùng
const getUserInformation = async () => {
  try {
    const response = await axiosClient.get("/admin/user/findAll"); // Gọi API để lấy tất cả người dùng
    console.log("Dữ liệu người dùng:", response.data); // In dữ liệu người dùng
    if (
      response.data &&
      response.data.users &&
      response.data.users.length > 0
    ) {
      return response.data.users[0];
    }
    return null; // Nếu không có người dùng nào, trả về null
  } catch (error) {
    console.error("Lỗi khi lấy thông tin người dùng:", error);
    return null;
  }
};

export { getUserInformation };
