import React, { useState } from "react";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import "../FooterAdmin/styleFooter.scss";

const AdminFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <footer className="text-left py-3 mt-auto">
      <Container>
        <div className="social-icons mb-3">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook fa-lg me-3"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter fa-lg me-3"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin fa-lg me-3"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>

        <p className="mb-1">&copy; {new Date().getFullYear()} NUTRI STORE</p>
        <p
          className="mb-0 policy-link"
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
        >
          CHÍNH SÁCH BẢO MẬT
        </p>

        <Modal isOpen={showModal} toggle={toggleModal} className="modal-custom">
          <ModalHeader toggle={toggleModal}>
            <i className="fas fa-shield-alt me-2"></i> Chính Sách Bảo Mật Dữ
            Liệu
          </ModalHeader>
          <ModalBody>
            <ol>
              <li>
                <i className="fas fa-user-lock me-2"></i> Chúng tôi thu thập
                thông tin cá nhân của bạn khi bạn đăng ký tài khoản.
              </li>
              <li>
                <i className="fas fa-shield-alt me-2"></i> Thông tin của bạn sẽ
                được bảo mật và không chia sẻ cho bên thứ ba.
              </li>
              <li>
                <i className="fas fa-cookie-bite me-2"></i> Chúng tôi có thể sử
                dụng cookie để cải thiện trải nghiệm người dùng.
              </li>
              <li>
                <i className="fas fa-key me-2"></i> Bạn có quyền truy cập và
                chỉnh sửa thông tin cá nhân của mình bất cứ lúc nào.
              </li>
              <li>
                <i className="fas fa-lock me-2"></i> Chúng tôi cam kết bảo vệ
                thông tin của bạn khỏi các truy cập trái phép.
              </li>
              <li>
                <i className="fas fa-bell me-2"></i> Mọi thay đổi về chính sách
                bảo mật sẽ được thông báo đến bạn.
              </li>
              <li>
                <i className="fas fa-calendar-alt me-2"></i> Thời gian lưu trữ
                thông tin cá nhân của bạn sẽ tuân thủ theo quy định pháp luật.
              </li>
              <li>
                <i className="fas fa-trash-alt me-2"></i> Bạn có quyền yêu cầu
                xóa thông tin cá nhân của mình bất cứ lúc nào.
              </li>
              <li>
                <i className="fas fa-exclamation-circle me-2"></i> Chúng tôi sẽ
                thông báo cho bạn nếu có bất kỳ vi phạm nào liên quan đến dữ
                liệu của bạn.
              </li>
              <li>
                <i className="fas fa-sync-alt me-2"></i> Chính sách bảo mật này
                có thể được cập nhật định kỳ.
              </li>
            </ol>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              Đóng
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </footer>
  );
};

export default AdminFooter;
