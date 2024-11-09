import React, { useState } from "react";
{
  /*import các thành phần trong reactstrap */
}
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "../CardProduct/CardProduct.scss";
import { deleteProduct, updateProduct } from "../../../Api/product"; // Import hàm xóa và chỉnh sửa sản phẩm

// Component CardProduct hiển thị chi tiết sản phẩm và cung cấp các chức năng xóa, chỉnh sửa
const CardProduct = ({ product, onDeleteSuccess, onUpdateSuccess }) => {
  // State quản lý mở/đóng modal xóa và modal chỉnh sửa
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  // State lưu trữ dữ liệu sản phẩm khi chỉnh sửa
  const [editAttributes, setEditAttributes] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

  // Đổi trạng thái của modal xóa
  const toggle = () => setModal(!modal);
  // Đổi trạng thái của modal chỉnh sửa
  const toggleEdit = () => setModalEdit(!modalEdit);

  // Hàm xử lý xóa sản phẩm
  const handleDelete = async () => {
    try {
      const result = await deleteProduct([product._id]); // Xóa sản phẩm từ API
      console.log("Sản phẩm đã bị xóa:", result);
      onDeleteSuccess(product._id); // Gọi hàm callback sau khi xóa thành công
      toggle(); // Đóng modal xóa
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  // Hàm xử lý thay đổi dữ liệu chỉnh sửa khi người dùng nhập
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditAttributes((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm xử lý cập nhật sản phẩm
  const handleUpdate = async () => {
    try {
      const result = await updateProduct(product._id, editAttributes); // Cập nhật sản phẩm qua API
      console.log("Sản phẩm đã được cập nhật:", result);
      onUpdateSuccess(product._id, editAttributes); // Gọi hàm callback sau khi cập nhật thành công
      toggleEdit(); // Đóng modal chỉnh sửa
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
    }
  };

  return (
    <Card className="card-container shadow-sm rounded">
      {/* Hình ảnh sản phẩm */}
      <CardImg
        top
        width="100%"
        src={
          product.images && product.images[0]?.buffer
            ? `data:${product.images[0].mimetype};base64,${product.images[0].buffer}`
            : "https://via.placeholder.com/150" // Hình ảnh mặc định nếu không có ảnh sản phẩm
        }
        alt={product.name}
        className="product-image"
      />

      <CardBody>
        {/* Tên sản phẩm */}
        <CardTitle tag="h5" className="product-name">
          {product.name}
        </CardTitle>
        {/* Giá sản phẩm */}
        <CardText>
          <strong>Giá: </strong>
          {product.price.toLocaleString()} VNĐ
        </CardText>
        {/* Mô tả sản phẩm */}
        <CardText className="description">
          <strong>Mô tả: </strong>
          {product.description.substring(0, 150)}...
        </CardText>
        {/* Độ tuổi phù hợp */}
        <CardText>
          <strong>Độ tuổi phù hợp: </strong>
          {product.suitableAge}+
        </CardText>
        {/* Nút xóa và chỉnh sửa */}
        <div className="action-buttons">
          <Button color="danger" size="sm" onClick={toggle}>
            Xóa
          </Button>
          <Button color="warning" size="sm" onClick={toggleEdit}>
            Chỉnh sửa
          </Button>
        </div>
      </CardBody>

      {/* Modal xác nhận xóa */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Xác nhận xóa</ModalHeader>
        <ModalBody>
          Bạn có chắc chắn muốn xóa sản phẩm <strong>{product.name}</strong>{" "}
          không?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Hủy
          </Button>
          <Button color="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal chỉnh sửa */}
      <Modal isOpen={modalEdit} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>Chỉnh sửa sản phẩm</ModalHeader>
        <ModalBody>
          {/* Các input để chỉnh sửa sản phẩm */}
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            name="name"
            value={editAttributes.name}
            onChange={handleEditChange}
          />
          <label>Giá:</label>
          <input
            type="number"
            name="price"
            value={editAttributes.price}
            onChange={handleEditChange}
          />
          <label>Mô tả:</label>
          <textarea
            name="description"
            value={editAttributes.description}
            onChange={handleEditChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleEdit}>
            Hủy
          </Button>
          <Button color="primary" onClick={handleUpdate}>
            Cập nhật
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  );
};

export default CardProduct;
