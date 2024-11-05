import React from "react";
import { Container, Col, Row, Button } from "reactstrap"; // Import Button từ Reactstrap
import "./CardProduct.scss";
import pic from "../../../pages/Dashboard/img/ToyLogo.avif";

function CardProduct({ price, quantity, onQuantityChange }) {
  const pricePerUnit = price; // Giá mỗi sản phẩm

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1); // Tăng số lượng
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1); // Giảm số lượng chỉ khi nó lớn hơn 1
    }
  };

  const totalPrice = quantity * pricePerUnit; // Tính tổng giá

  return (
    <Container className="card-product pt-3 pb-3">
      <Row className="product-container">
        <Col md={6} className="product-details">
          <Row>
            <Col md={4} className="image-container">
              <img src={pic} alt="Product" />
            </Col>
            <Col md={8} className="info-container">
              <Row className="product-name">Tên sản phẩm: </Row>
              <Row className="product-type">Loại sản phẩm: </Row>
              <Row className="product-type">Mô tả:</Row>
            </Col>
          </Row>
        </Col>

        <Col md={2} className="quantity-controls text-left">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button className="quantity-button" onClick={decreaseQuantity}>
              -
            </Button>
            <span className="quantity" style={{ margin: "0 10px" }}>
              {quantity} {/* Hiển thị số lượng */}
            </span>
            <Button className="quantity-button" onClick={increaseQuantity}>
              +
            </Button>
          </div>
        </Col>

        <Col md={2} className="product-price text-left">
          {pricePerUnit.toLocaleString()} VNĐ {/* Hiển thị giá mỗi sản phẩm */}
        </Col>
        <Col md={2} className="product-total text-left">
          {totalPrice.toLocaleString()} VNĐ {/* Hiển thị tổng giá */}
        </Col>
      </Row>

      {/* Hiển thị giá và tổng cộng khi màn hình nhỏ */}
      <div className="mobile-price-info">
        <p>Giá: {pricePerUnit.toLocaleString()} VNĐ</p>
        <p>Tổng cộng: {totalPrice.toLocaleString()} VNĐ</p>
      </div>
    </Container>
  );
}

export default CardProduct;
