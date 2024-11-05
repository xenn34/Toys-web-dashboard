import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./ShoppingCart.scss";
import CardProduct from "./CardProduct/CardProduct";

const ShoppingCart = () => {
  return (
    <Container>
      <Row>
        <CardProduct />
      </Row>
      <Row>
        <Col>Tổng cộng</Col>
        <Col>Thanh toán</Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
