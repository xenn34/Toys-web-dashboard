import "./ProductCard-Cart.scss";
import React from "react";
import { Container, Col, Row } from "reactstrap";
import picToys from "../../../../Dashboard/img/ToyLogo.avif";

const ProductCardCart = ({
  product = {
    name: "Con quái vật rụng lông",
    quantity: 2,
    image: picToys,
    total: "$40",
  },
  onRemove,
}) => {
  return (
    <Container className="product-card-cart">
      <Row className="product-card-cart__row">
        <Col xs="8" className="product-card-cart__col">
          <Row className="product-card-cart__name">{product.name}</Row>
          <Row className="product-card-cart__quantity">
            Số lượng: {product.quantity}
          </Row>
          <Row className="product-card-cart__total">
            Tổng cộng: {product.total}
          </Row>
        </Col>
        <Col xs="4">
          <img
            className="product-card-cart__image"
            src={product.image}
            alt={product.name}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCardCart;
