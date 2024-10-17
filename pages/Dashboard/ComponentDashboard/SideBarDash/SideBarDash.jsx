import React from "react";
import { Container } from "reactstrap";
import "./SideBarDash.scss";

const SideBar = () => {
  return (
    <Container className="bg-light">
      <Container className="bg-info sidebar-container">
        <h5>Sidebar</h5>
        <p>Nội dung sidebar hoang huy ne</p>
      </Container>
    </Container>
  );
};

export default SideBar;
