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
          <ModalHeader toggle={toggleModal}>Chính Sách Bảo Mật</ModalHeader>
          <ModalBody>
            <ol>
              <li>
                Chúng tôi thu thập thông tin cá nhân của bạn khi bạn đăng ký tài
                khoản.
              </li>
              <li>
                Thông tin của bạn sẽ được bảo mật và không chia sẻ cho bên thứ
                ba.
              </li>
              <li>
                Chúng tôi có thể sử dụng cookie để cải thiện trải nghiệm người
                dùng.
              </li>
              <li>
                Bạn có quyền truy cập và chỉnh sửa thông tin cá nhân của mình
                bất cứ lúc nào.
              </li>
              <li>
                Chúng tôi cam kết bảo vệ thông tin của bạn khỏi các truy cập
                trái phép.
              </li>
              <li>
                Mọi thay đổi về chính sách bảo mật sẽ được thông báo đến bạn.
              </li>
              <li>
                Thời gian lưu trữ thông tin cá nhân của bạn sẽ tuân thủ theo quy
                định pháp luật.
              </li>
              <li>
                Bạn có quyền yêu cầu xóa thông tin cá nhân của mình bất cứ lúc
                nào.
              </li>
              <li>
                Chúng tôi sẽ thông báo cho bạn nếu có bất kỳ vi phạm nào liên
                quan đến dữ liệu của bạn.
              </li>
              <li>Chính sách bảo mật này có thể được cập nhật định kỳ.</li>
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
