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

const CardProduct = ({ product }) => {
  // State để điều khiển hiển thị modal
  const [modal, setModal] = useState(false);

  // Hàm toggle modal
  const toggle = () => setModal(!modal);

  // Hàm xử lý xóa
  const handleDelete = () => {
    // Gọi API hoặc xử lý xóa ở đây
    console.log("Sản phẩm đã bị xóa:", product.name);
    toggle(); // Đóng modal sau khi xóa
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
          {product.description.substring(0, 150)}... {/* Hiển thị mô tả ngắn */}
        </CardText>
        <CardText>
          <strong>Độ tuổi phù hợp: </strong>
          {product.suitableAge}+
        </CardText>
        <div className="action-buttons">
          <Button color="danger" size="sm" onClick={toggle}>
            Xóa
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
    </Card>
  );
};

export default CardProduct;
