import "./OrderCard.scss";
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
import OrderCart from "../OrderCart/OrderCart";

const OrderCard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <Container className="order-card">
      <Row>
        <Col>
          <i className="fas fa-user"></i>
          <strong> Tên khách hàng:</strong> Nguyễn Văn A
        </Col>
        <Col>
          <i className="fas fa-phone"></i>
          <strong> Số điện thoại:</strong> 0123456789
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="fas fa-map-marker-alt"></i>
          <strong> Địa chỉ:</strong> 123 Đường ABC, TP.HCM
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="fas fa-receipt"></i>
          <strong> Mã đơn:</strong> OD123456789
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="fas fa-calendar-alt"></i>
          <strong> Ngày đặt hàng:</strong> 05/11/2024
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button color="primary" block onClick={toggleModal}>
            Xem Chi Tiết
          </Button>
        </Col>
      </Row>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Chi Tiết Đơn Hàng</ModalHeader>
        <ModalBody>
          <OrderCart />
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

export default OrderCard;
