import { React } from "react";
import { Col, Row, Container } from "reactstrap";
import "../ListProduct/styleListProducts.scss";
import CardProduct from "./CardProduct/CardProduct";

const ProductView = () => {
  return (
    <>
      <Container className="pt-3">
        <CardProduct />
      </Container>
    </>
  );
};

export default ProductView;
