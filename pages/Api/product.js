// src/Api/product.js
import axiosClient from "./axiosClient";

// Lấy tất cả sản phẩm
const getAllProducts = async () => {
  try {
    const response = await axiosClient.get("/product/findAll");
    console.log("Dữ liệu sản phẩm:", response.data); // In ra dữ liệu trả về
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    throw error;
  }
};

// Lấy sản phẩm theo ID
const getProduct = async (id) => {
  try {
    console.log("Product ID:", id); // Kiểm tra giá trị ID
    const response = await axiosClient.get("/product/findOne", {
      params: { _id: id },
    });
    return response.data; // Trả về thông tin sản phẩm
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm:", error);
    throw error;
  }
};

// Lấy tất cả danh mục sản phẩm
const getAllCategories = async () => {
  try {
    const response = await axiosClient.get("/categories/findAll");
    return response.data; // Trả về danh sách danh mục
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error);
    throw error;
  }
};

export { getAllProducts, getProduct, getAllCategories };
