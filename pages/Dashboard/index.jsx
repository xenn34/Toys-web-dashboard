import React from "react";
import { Container, Row, Col } from "reactstrap";
import SideBar from "./ComponentDashboard/SideBarDash/SideBarDash.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import OverViewDash from "./ComponentDashboard/Dash-Pages/OverViewDash/OverViewDash.jsx";
import BestSellers from "./ComponentDashboard/Dash-Pages/BestSellers/BestSellers.jsx";
import KPIs from "./ComponentDashboard/Dash-Pages/KPIs/KPIs.jsx";
import TopStaff from "./ComponentDashboard/Dash-Pages/TopStaff/TopStaff.jsx";
import TopUser from "./ComponentDashboard/Dash-Pages/TopUser/TopUser.jsx";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs="12" md="3" className="bg-warning p-3">
          <SideBar />
        </Col>
        <Col xs="12" md="9" className="bg-light p-3">
          <Routes>
            <Route path="overview" element={<OverViewDash />} />
            <Route path="bestseller" element={<BestSellers />} />
            <Route path="KPIs" element={<KPIs />} />
            <Route path="top-staff" element={<TopStaff />} />
            <Route path="top-user" element={<TopUser />} />
            {/* Điều hướng mặc định */}
            <Route path="*" element={<Navigate to="overview" />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
