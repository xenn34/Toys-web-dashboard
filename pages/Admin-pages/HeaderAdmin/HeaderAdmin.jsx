import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import admin_pic from "../../Dashboard/img/Shin.jfif";
import "./HeaderAdmin.scss";

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) {
      toggleNavbar();
    }
  };

  const isActive = (path) =>
    location.pathname === path ? "text-dark" : "text-white";

  return (
    <Navbar
      expand="md"
      className="border-bottom shadow-sm px-3 rounded bg-info"
    >
      <NavbarToggler onClick={toggleNavbar} className="navbar-toggler">
        <span className="fas fa-bars"></span>
      </NavbarToggler>

      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link
              to="/home"
              className={`nav-link nav-text ${isActive("/home")}`}
              onClick={handleLinkClick}
            >
              TRANG CHỦ
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/dashboard"
              className={`nav-link nav-text ${isActive("/dashboard")}`}
              onClick={handleLinkClick}
            >
              DASHBOARD
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/employees"
              className={`nav-link nav-text ${isActive("/employees")}`}
              onClick={handleLinkClick}
            >
              NHÂN VIÊN
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/customers"
              className={`nav-link nav-text ${isActive("/customers")}`}
              onClick={handleLinkClick}
            >
              KHÁCH HÀNG
            </Link>
          </NavItem>
        </Nav>
      </Collapse>

      <Nav navbar className="ms-3">
        <NavItem className="d-flex align-items-center">
          <span className="me-2 employee-name">NGUYỄN HOÀNG HUY</span>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              tag="span"
              onClick={toggleDropdown}
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
              className="nav-link"
            >
              <img
                src={admin_pic}
                alt="Admin Avatar"
                className="rounded-circle"
                width="40"
                height="40"
                style={{ cursor: "pointer" }}
              />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link to="/profile" className="dropdown-item">
                  <i className="fas fa-user me-2"></i> THÔNG TIN CÁ NHÂN
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/logout" className="dropdown-item">
                  <i className="fas fa-sign-out-alt me-2"></i> ĐĂNG XUẤT
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AdminHeader;
