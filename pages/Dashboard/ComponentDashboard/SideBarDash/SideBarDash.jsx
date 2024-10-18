import React from "react";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./SideBarDash.scss";
import logoweb from "../../../Dashboard/img/ToyLogo.avif";

const SideBar = () => {
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
        <hr className="my-3 text-danger" style={{ height: "3px" }} />
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i
                className="fas fa-tachometer-alt"
                style={{ marginRight: "8px" }}
              ></i>
              TỔNG QUAN
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i className="fas fa-star" style={{ marginRight: "8px" }}></i>
              SẢN PHẨM BÁN CHẠY
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i className="fas fa-clock" style={{ marginRight: "8px" }}></i>
              SẢN PHẨM ĐÃ BÁN
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i className="fas fa-truck" style={{ marginRight: "8px" }}></i>
              SẢN PHẨM ĐÃ GIAO
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i className="fas fa-medal" style={{ marginRight: "8px" }}></i>
              TOP NGƯỜI DÙNG
            </NavLink>
          </NavItem>
        </Nav>
        <hr className="my-3 text-danger" />
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i className="fas fa-home" style={{ marginRight: "8px" }}></i>
              TRANG CHỦ
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
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
