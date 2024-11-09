import "./OrderCard.scss";
import React, { useState, useEffect } from "react";
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
import ProductCardCart from "../OrderCart/ProductCard-Cart/ProductCard-Cart";
import { getUserInformation } from "../../../Api/getUser"; // Import hàm lấy thông tin người dùng

const OrderCard = () => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null); // State lưu trữ thông tin người dùng

  // Hàm toggle modal
  const toggleModal = () => {
    setModal(!modal);
  };

  // Hàm để lấy thông tin người dùng khi component được render
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userData = await getUserInformation(); // Gọi API lấy người dùng
      if (userData) {
        setUser(userData); // Cập nhật thông tin người dùng vào state
        console.log("Load thành công thông tin người dùng:", userData);
      } else {
        console.log("Không tìm thấy thông tin người dùng.");
      }
    };
    fetchUserInfo(); // Gọi hàm khi component được render
  }, []);

  return (
    <Container className="order-card">
      <Row className="d-flex flex-column flex-md-row">
        {/* Khi màn hình nhỏ hơn md, các cột sẽ xếp thành cột, còn với màn hình lớn hơn hoặc bằng md sẽ xếp thành dòng */}
        <Col className="d-flex align-items-center mb-2">
          <i className="fas fa-user"></i>
          <strong> Tên khách hàng:</strong>{" "}
          {user ? user.fullName : "Đang tải..."}
        </Col>
        <Col className="d-flex align-items-center mb-2">
          <i className="fas fa-phone"></i>
          <strong> Số điện thoại:</strong> {user ? user.phone : "Đang tải..."}
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
          <strong> Mã đơn:</strong> {user ? user._id : "Đang tải..."}
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
      <Modal isOpen={modal} toggle={toggleModal} className="order-modal">
        <ModalHeader toggle={toggleModal}>Chi tiết đơn hàng</ModalHeader>
        <ModalBody>
          <ProductCardCart />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Duyệt
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default OrderCard;
