import React, { useState } from "react";
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

const CardProduct = ({ product, onDeleteSuccess, onUpdateSuccess }) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [editAttributes, setEditAttributes] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

  const toggle = () => setModal(!modal);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const handleDelete = async () => {
    try {
      const result = await deleteProduct([product._id]);
      console.log("Sản phẩm đã bị xóa:", result);
      onDeleteSuccess(product._id);
      toggle();
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditAttributes((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const result = await updateProduct(product._id, editAttributes);
      console.log("Sản phẩm đã được cập nhật:", result);
      onUpdateSuccess(product._id, editAttributes);
      toggleEdit();
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
    }
  };

  return (
    <Card className="card-container shadow-sm rounded">
      <CardImg
        top
        width="100%"
        src={`data:${product.images[0].mimetype};base64,${product.images[0].buffer}`}
        alt={product.name}
        className="product-image"
      />
      <CardBody>
        <CardTitle tag="h5" className="product-name">
          {product.name}
        </CardTitle>
        <CardText>
          <strong>Giá: </strong>
          {product.price.toLocaleString()} VNĐ
        </CardText>
        <CardText className="description">
          <strong>Mô tả: </strong>
          {product.description.substring(0, 150)}...
        </CardText>
        <CardText>
          <strong>Độ tuổi phù hợp: </strong>
          {product.suitableAge}+
        </CardText>
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
