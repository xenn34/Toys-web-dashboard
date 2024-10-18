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
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i className="ni ni-spaceship" />
              Upgrade to PRO
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i className="ni ni-spaceship" />
              Upgrade to PRO
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="mb-md-1" navbar>
          <NavItem className="active-pro active">
            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
              <i className="ni ni-spaceship" />
              Upgrade to PRO
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SideBar;
