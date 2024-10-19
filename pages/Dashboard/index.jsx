import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import SideBar from "./ComponentDashboard/SideBarDash/SideBarDash.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverViewDash from "./ComponentDashboard/Dash-Pages/OverViewDash/OverViewDash.jsx";

const Dashboard = () => {
  return (
    <Container className="bg-primary" fluid>
      <Row>
        <Col xs="12" md="3" className="bg-info p-3">
          <SideBar />
        </Col>
        <Col xs="12" md="9" className="bg-light p-3">
          <OverViewDash />
          <Routes>
            <Route></Route>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
