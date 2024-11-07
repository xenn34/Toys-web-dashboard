import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "../CardProduct/CardProduct.scss";
import productPic from "../../../Dashboard/img/lbx.jfif";

const CardProduct = () => {
  const productData = {
    id: "SP12345",
    name: "Laptop Pro Max 2024",
    price: 25000000,
    flashSaleCode: "FS2024",
    description:
      "Laptop Pro Max 2024 với cấu hình mạnh mẽ, thích hợp cho mọi nhu cầu từ làm việc đến giải trí.",
    inStock: true,
    imageUrl: productPic,
  };

  const [modal, setModal] = useState(false);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false); // State cho modal xác nhận xóa

  const toggleModal = () => setModal(!modal);
  const toggleConfirmDeleteModal = () =>
    setConfirmDeleteModal(!confirmDeleteModal); // Hàm toggle cho modal xác nhận

  const handleDelete = () => {
    // Xử lý logic xóa sản phẩm ở đây
    console.log("Sản phẩm đã bị xóa");
    toggleConfirmDeleteModal(); // Đóng modal xác nhận
  };

  return (
    <Container className="pt-3 pb-3 card-container bg-white shadow-sm rounded">
      <Row>
        <Col md={8}>
          <Row className="mb-2">
            <Col>
              <strong>ID:</strong> {productData.id}
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <strong>Tên hàng hóa:</strong> {productData.name}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Giá:</strong> {productData.price.toLocaleString()} VNĐ
            </Col>
          </Row>
          <Row>
            <Col className="pt-2">
              <strong>Mô tả:</strong>
              <p className="description">{productData.description}</p>
            </Col>
          </Row>
          <Row>
            <Col className="pt-2 d-flex align-items-center">
              <div>
                {" "}
                {/* div trạng thái */}
                <strong>Trạng thái:</strong>
                <span className="ms-2">
                  <span
                    className={`status-label ${
                      productData.inStock ? "in-stock" : "out-of-stock"
                    }`}
                  >
                    {productData.inStock ? "Còn hàng" : "Hết hàng"}
                  </span>
                </span>
                <span className="mx-2">|</span> {/* Gạch dọc */}
              </div>
              <div className="action-buttons">
                {" "}
                {/* div button */}
                <Button color="primary" size="sm" onClick={toggleModal}>
                  Chỉnh sửa thông tin
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  className="ms-2"
                  onClick={toggleConfirmDeleteModal}
                >
                  Xóa sản phẩm
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="d-flex align-items-start">
          <img
            src={productData.imageUrl}
            alt={productData.name}
            className="product-image rounded-left"
          />
        </Col>
      </Row>

      {/* Modal chỉnh sửa thông tin sản phẩm */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          <strong> CHỈNH SỬA THÔNG TIN SẢN PHẨM</strong>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="productId">
              <strong>Mã sản phẩm</strong>
            </Label>
            <Input type="text" id="productId" value={productData.id} readOnly />
          </FormGroup>
          <FormGroup>
            <Label for="productName">
              <strong>Tên sản phẩm</strong>
            </Label>
            <Input
              type="text"
              id="productName"
              defaultValue={productData.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="productPrice">
              <strong>Giá</strong>
            </Label>
            <Input
              type="number"
              id="productPrice"
              defaultValue={productData.price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="flashSaleCode">
              <strong>Mã Flash Sale</strong>
            </Label>
            <Input
              type="text"
              id="flashSaleCode"
              defaultValue={productData.flashSaleCode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="imageUpload">
              <strong>Import hình ảnh</strong>
            </Label>
            <Input type="file" id="imageUpload" accept="image/*" />
          </FormGroup>
          <FormGroup>
            <Label for="productDescription">
              <strong>Mô tả</strong>
            </Label>
            <Input
              type="textarea"
              id="productDescription"
              defaultValue={productData.description}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Lưu
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={confirmDeleteModal} toggle={toggleConfirmDeleteModal}>
        <ModalHeader toggle={toggleConfirmDeleteModal}>
          XÁC NHẬN XÓA SẢN PHẨM
        </ModalHeader>
        <ModalBody>
          <div className="d-flex align-items-center">
            <i
              className="fas fa-exclamation-triangle me-2"
              style={{ color: "orange" }}
            ></i>
            <strong>Bạn có chắc chắn muốn xóa sản phẩm này không?</strong>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDelete}>
            Xóa
          </Button>
          <Button color="secondary" onClick={toggleConfirmDeleteModal}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default CardProduct;
