import React from "react";
import { Col, Row, Container } from "reactstrap";
import data_pic from "../img/data.jfif"; // Giữ lại hình ảnh data
import "./SidebarAnimation.scss";

function SidebarAnimation() {
  return (
    <Container fluid className="sidebar-animation-container">
      <Row className="justify-content-center pt-5 pb-5">
        <Col xs="12" className="icon-container text-center">
          <img src={data_pic} alt="Data Icon" className="data-icon" />
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col xs="12" className="animation-container">
          <h5 className="animated-text">NUTRI STORE</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default SidebarAnimation;
