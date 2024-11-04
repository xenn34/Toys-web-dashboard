import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./UploadProduct.scss";

const UploadProduct = () => {
  const [modal, setModal] = useState(false); // Trạng thái modal xác nhận
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    price: "",
    flashSaleCode: "",
    description: "",
    image: null,
  });

  const toggleModal = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProductDetails({
      ...productDetails,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal(); // Mở modal xác nhận
  };

  const handleConfirm = () => {
    // Xử lý đăng bán sản phẩm ở đây
    console.log("Sản phẩm đã được đăng:", productDetails);
    toggleModal(); // Đóng modal sau khi xác nhận
  };

  return (
    <Container className="upload-product-container">
      <h2 className="text-center">Đăng Bán Sản Phẩm</h2>
      <Row>
        <Col md={6} className="mx-auto">
          <FormGroup>
            <Label for="productId">
              <i className="fas fa-tag"></i> Mã sản phẩm
            </Label>
            <Input
              type="text"
              id="productId"
              name="id"
              placeholder="Nhập mã sản phẩm"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="productName">
              <i className="fas fa-box"></i> Tên sản phẩm
            </Label>
            <Input
              type="text"
              id="productName"
              name="name"
              placeholder="Nhập tên sản phẩm"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="productPrice">
              <i className="fas fa-dollar-sign"></i> Giá
            </Label>
            <Input
              type="number"
              id="productPrice"
              name="price"
              placeholder="Nhập giá sản phẩm"
              onChange={handleChange}
            />
            <span className="price-label">VNĐ</span> {/* Label VNĐ */}
          </FormGroup>
          <FormGroup>
            <Label for="flashSaleCode">
              <i className="fas fa-fire"></i> Mã Flash Sale
            </Label>
            <Input
              type="text"
              id="flashSaleCode"
              name="flashSaleCode"
              placeholder="Nhập mã flash sale"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="productDescription">
              <i className="fas fa-info-circle"></i> Mô tả
            </Label>
            <Input
              type="textarea"
              id="productDescription"
              name="description"
              placeholder="Nhập mô tả sản phẩm"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="imageUpload">
              <i className="fas fa-image"></i> Tải ảnh sản phẩm
            </Label>
            <Input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleFileChange}
            />
          </FormGroup>
          <Button color="primary" className="mt-3" onClick={handleSubmit}>
            Đăng Bán
          </Button>
        </Col>
      </Row>

      {/* Modal xác nhận đăng bán */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          XÁC NHẬN ĐĂNG BÁN SẢN PHẨM
        </ModalHeader>
        <ModalBody>
          Bạn có chắc chắn muốn đăng bán sản phẩm này không?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleConfirm}>
            Xác nhận
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default UploadProduct;
