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
} from "reactstrap";
import "./Evaluation.scss";
import productImage from "../../Dashboard/img/ToyLogo.avif";
import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewProduct = () => {
  const productData = {
    id: "SP12345",
    name: "Laptop Pro Max 2024",
    description:
      "Laptop Pro Max 2024 với cấu hình mạnh mẽ, thích hợp cho mọi nhu cầu từ làm việc đến giải trí.",
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  // Dữ liệu đánh giá mẫu
  const reviews = [
    { name: "Nguyễn Văn A", comment: "Sản phẩm rất tốt!", rating: 5 },
    { name: "Trần Thị B", comment: "Mình rất thích laptop này.", rating: 4 },
    {
      name: "Lê Văn C",
      comment: "Chất lượng tốt, giao hàng nhanh.",
      rating: 5,
    },
  ];

  return (
    <Container className="pt-3 pb-3 review-container bg-white shadow-sm rounded">
      <Row>
        <Col md={8}>
          <Row className="mb-2">
            <Col>
              <strong>Tên hàng hóa:</strong> {productData.name}
            </Col>
          </Row>
          <Row>
            <Col className="pt-2">
              <strong>Mô tả:</strong>
              <p className="description">{productData.description}</p>
            </Col>
          </Row>
          <Row>
            <Col className="pt-2">
              <Button color="primary" onClick={toggleModal}>
                Xem đánh giá
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <img
            src={productImage}
            alt={productData.name}
            className="product-image rounded"
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </Col>
      </Row>

      {/* Modal hiển thị đánh giá */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Đánh giá sản phẩm</ModalHeader>
        <ModalBody>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Đóng
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ReviewProduct;
