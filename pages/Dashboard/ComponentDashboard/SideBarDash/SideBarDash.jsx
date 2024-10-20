import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Collapse,
  Button,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "./SideBarDash.scss";
import logoweb from "../../../Dashboard/img/ToyLogo.avif";

const SideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State để kiểm soát collapse

  const toggle = () => setIsOpen(!isOpen); // Hàm toggle cho collapse

  // Hàm để xử lý khi nav được chọn
  const handleNavClick = () => {
    if (isOpen) {
      toggle(); // Thu gọn nếu đang mở
    }
  };

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-light navbar-custom"
      expand="md"
    >
      <Container fluid>
        {/* Ảnh Logo */}
        <Container>
          <img
            src={logoweb}
            alt="Logo"
            className="img-fluid"
            style={{ width: "100px", height: "auto" }}
          />
        </Container>
        <Button
          color="link"
          className="d-md-none" // Chỉ hiển thị trên màn hình nhỏ
          onClick={toggle}
        >
          <i className="fas fa-bars"></i>
        </Button>
        <hr className="my-3 text-danger" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mb-md-1 flex-column" navbar>
            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/overview" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="dashboard/overview"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick} // Gọi hàm khi click
              >
                <i
                  className="fas fa-tachometer-alt"
                  style={{ marginRight: "8px" }}
                ></i>
                TỔNG QUAN
              </Link>
            </NavItem>
            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/bestseller" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="dashboard/bestseller"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick} // Gọi hàm khi click
              >
                <i className="fas fa-star" style={{ marginRight: "8px" }}></i>
                SẢN PHẨM BÁN CHẠY
              </Link>
            </NavItem>

            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/KPIs" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="dashboard/KPIs"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick} // Gọi hàm khi click
              >
                <i className="fas fa-clock" style={{ marginRight: "8px" }}></i>
                KPIs
              </Link>
            </NavItem>

            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/shipping" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="dashboard/shipping"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick} // Gọi hàm khi click
              >
                <i className="fas fa-truck" style={{ marginRight: "8px" }}></i>
                SẢN PHẨM ĐÃ GIAO
              </Link>
            </NavItem>

            <NavItem
              className={`active-pro ${
                location.pathname === "/dashboard/top-user" ? "active" : ""
              }`}
              style={{ marginBottom: "10px" }}
            >
              <Link
                to="dashboard/top-user"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick} // Gọi hàm khi click
              >
                <i className="fas fa-medal" style={{ marginRight: "8px" }}></i>
                TOP NGƯỜI DÙNG
              </Link>
            </NavItem>
          </Nav>
        </Collapse>

        <hr className="my-3 text-danger" />
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro">
            <NavLink
              href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fas fa-home" style={{ marginRight: "8px" }}></i>
              TRANG CHỦ
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro">
            <NavLink
              href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i
                className="fas fa-sign-out-alt"
                style={{ marginRight: "8px" }}
              ></i>
              ĐĂNG XUẤT
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SideBar;
