import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import SideBar from "./ComponentDashboard/SideBarDash/SideBarDash.jsx";
const Dashboard = () => {
  return (
    <Fragment>
      <Container className="bg-primary" fluid>
        <Row>
          <Col xs="12" md="3" className="bg-info p-3">
            {" "}
            <SideBar />
          </Col>
          <Col xs="12" md="9" className="bg-light p-3">
            {" "}
            <h5>Content</h5>
            <p>Nội dung chính</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
