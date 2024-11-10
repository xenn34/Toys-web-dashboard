import React, { useState } from "react"; // Nhập useState từ React
import { Container, Col, Row, Button } from "reactstrap"; // Import Button từ Reactstrap
import "./ShoppingCart.scss";
import CardProduct from "./CardProduct/CardProduct";

const ShoppingCart = () => {
  const initialProducts = [
    { id: 1, price: 1000000, quantity: 1 }, // sản phẩm 1
    { id: 2, price: 1000000, quantity: 1 }, // sản phẩm 2
    { id: 3, price: 1000000, quantity: 1 }, // sản phẩm 3
  ];

  const [products, setProducts] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  // Cập nhật số lượng cho một sản phẩm
  const updateQuantity = (id, newQuantity) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
    calculateTotal(updatedProducts); // Tính tổng mới
  };

  // Tính tổng giá của giỏ hàng
  const calculateTotal = (updatedProducts) => {
    const total = updatedProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalAmount(total);
  };

  // Tính tổng khi component mount
  React.useEffect(() => {
    calculateTotal(products);
  }, [products]);

  return (
    <Container className="shopping-cart pt-3">
      <Row>
        <Col>
          <Row className="title">
            <h1>GIỎ HÀNG</h1>
          </Row>
        </Col>
        <Col>
          <Row className="title">
            <h1>{products.length} SẢN PHẨM</h1>
          </Row>
        </Col>
      </Row>

      <hr className="text-info-emphasis" />
      <Row className="header-row">
        <Col md="6" className="text-detail">
          Chi tiết
        </Col>
        <Col className="text-quantity" md="2">
          Số lượng
        </Col>
        <Col className="text-price" md="2">
          Giá (VNĐ)
        </Col>
        <Col className="text-total" md="2">
          Tổng cộng
        </Col>
      </Row>

      {products.map((product) => (
        <Row key={product.id} className="product-row">
          <CardProduct
            price={product.price}
            quantity={product.quantity}
            onQuantityChange={(newQuantity) =>
              updateQuantity(product.id, newQuantity)
            }
          />
        </Row>
      ))}

      <hr className="text-info-emphasis" />
      <Row className="summary">
        <Col></Col>
        <Col>
          <Row className="summary-row">
            <Col className="total text-center">
              Tổng cộng: {totalAmount.toLocaleString()} VNĐ
            </Col>
            <Col className="checkout-col">
              <Button className="checkout-button">Thanh toán</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
