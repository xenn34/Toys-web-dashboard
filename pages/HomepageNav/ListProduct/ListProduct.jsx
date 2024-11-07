import { React } from "react";
import { Col, Row, Container } from "reactstrap";
import "../ListProduct/styleListProducts.scss";
import CardProduct from "./CardProduct/CardProduct";

const ProductView = () => {
  return (
    <Container>
      <h2 className="title pt-3 pb-0">DANH SÁCH SẢN PHẨM</h2>
      <div className="pt-3 pb-3">
        <CardProduct />
      </div>
    </Container>
  );
};

export default ProductView;
