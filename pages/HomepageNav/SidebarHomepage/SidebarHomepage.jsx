import React, { useState } from "react";
import { Navbar, NavItem, Nav, Container, Collapse, Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "./SidebarHomepage.scss";
import logo_web from "../../Dashboard/img/ToyLogo.avif";

const SidebarHomepage = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-light navbar-custom"
      expand="md"
    >
      <Container fluid>
        <Container>
          <img
            src={logo_web}
            alt="Logo"
            className="img-fluid"
            style={{ width: "100px", height: "auto" }}
          />
        </Container>
        <Button color="link" className="d-md-none" onClick={toggle}>
          <i className="fas fa-bars"></i>
        </Button>
        <hr className="my-3 text-danger" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mb-md-1 flex-column" navbar>
            <NavItem
              className={`active-pro ${
                location.pathname === "/home/products" ? "active" : ""
              }`}
              style={{ marginBottom: "15px" }}
            >
              <Link
                to="/home/products"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i
                  className="fas fa-list-ul"
                  style={{ marginRight: "10px" }}
                ></i>
                DANH SÁCH SẢN PHẨM
              </Link>
            </NavItem>
            <NavItem
              className={`active-pro ${
                location.pathname === "/home/upload-products" ? "active" : ""
              }`}
              style={{ marginBottom: "15px" }}
            >
              <Link
                to="/home/upload-products"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i className="fas fa-store" style={{ marginRight: "10px" }}></i>
                ĐĂNG BÁN SẢN PHẨM
              </Link>
            </NavItem>
            <NavItem
              className={`active-pro ${
                location.pathname === "/home/flash-sale" ? "active" : ""
              }`}
              style={{ marginBottom: "15px" }}
            >
              <Link
                to="/home/flash-sale"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i className="fas fa-bolt" style={{ marginRight: "10px" }}></i>
                FLASH SALE
              </Link>
            </NavItem>
            <NavItem
              className={`active-pro ${
                location.pathname === "/home/view-orders" ? "active" : ""
              }`}
              style={{ marginBottom: "15px" }}
            >
              <Link
                to="/home/view-orders"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ marginRight: "10px" }}
                ></i>
                DUYỆT ĐƠN
              </Link>
            </NavItem>
            <NavItem
              className={`active-pro ${
                location.pathname === "/home/review-products" ? "active" : ""
              }`}
              style={{ marginBottom: "15px" }}
            >
              <Link
                to="/home/review-products"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleNavClick}
              >
                <i
                  className="fas fa-star-half-alt"
                  style={{ marginRight: "10px" }}
                ></i>
                XEM ĐÁNH GIÁ
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default SidebarHomepage;
