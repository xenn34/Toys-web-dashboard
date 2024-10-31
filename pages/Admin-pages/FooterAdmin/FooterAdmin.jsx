import React, { useState } from "react";
import { Container } from "reactstrap";
import "../FooterAdmin/styleFooter.scss";

const AdminFooter = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <footer
      className="text-left py-3 mt-auto bg-info"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Container>
        <div className="social-icons mb-3">
          <a href="https://facebook.com" className="text-decoration-none me-3">
            <i className="fab fa-facebook fa-lg"></i>{" "}
          </a>
          <a href="https://twitter.com" className="text-decoration-none me-3">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://linkedin.com" className="text-decoration-none me-3">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://instagram.com" className="text-decoration-none">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>

        <p className="mb-1">&copy; {new Date().getFullYear()} NUTRI STORE</p>
        <p className="mb-0">
          <a
            href="#"
            className="text-decoration-none me-3"
            onClick={togglePolicy}
          >
            Chính sách bảo mật
          </a>
        </p>

        {showPolicy && (
          <div className="policy-content mt-3">
            <h5>Chính Sách Bảo Mật</h5>
            <ul className="list-unstyled">
              <li>
                1. Chúng tôi thu thập thông tin cá nhân của bạn khi bạn đăng ký
                tài khoản.
              </li>
              <li>
                2. Thông tin của bạn sẽ được bảo mật và không chia sẻ cho bên
                thứ ba.
              </li>
              <li>
                3. Chúng tôi có thể sử dụng cookie để cải thiện trải nghiệm
                người dùng.
              </li>
              <li>
                4. Bạn có quyền truy cập và chỉnh sửa thông tin cá nhân của mình
                bất cứ lúc nào.
              </li>
              <li>
                5. Chúng tôi cam kết bảo vệ thông tin của bạn khỏi các truy cập
                trái phép.
              </li>
              <li>
                6. Mọi thay đổi về chính sách bảo mật sẽ được thông báo đến bạn.
              </li>
              <li>
                7. Thời gian lưu trữ thông tin cá nhân của bạn sẽ tuân thủ theo
                quy định pháp luật.
              </li>
              <li>
                8. Bạn có quyền yêu cầu xóa thông tin cá nhân của mình bất cứ
                lúc nào.
              </li>
              <li>
                9. Chúng tôi sẽ thông báo cho bạn nếu có bất kỳ vi phạm nào liên
                quan đến dữ liệu của bạn.
              </li>
              <li>10. Chính sách bảo mật này có thể được cập nhật định kỳ.</li>
            </ul>
          </div>
        )}
      </Container>
    </footer>
  );
};

export default AdminFooter;
