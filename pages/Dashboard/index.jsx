import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import SideBar from "./ComponentDashboard/SideBarDash/SideBarDash.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, // Import Navigate
} from "react-router-dom";
import OverViewDash from "./ComponentDashboard/Dash-Pages/OverViewDash/OverViewDash.jsx";
import BestSellers from "./ComponentDashboard/Dash-Pages/BestSellers/BestSellers.jsx";
import KPIs from "./ComponentDashboard/Dash-Pages/KPIs/KPIs.jsx";
import Shipping from "./ComponentDashboard/Dash-Pages/Shipping/Shipping.jsx";
import TopUser from "./ComponentDashboard/Dash-Pages/TopUser/TopUser.jsx";

const Dashboard = () => {
  return (
    <Container className="bg-primary" fluid>
      <Row>
        <Col xs="12" md="3" className="bg-info p-3">
          <SideBar />
        </Col>
        <Col xs="12" md="9" className="bg-light p-3">
          <Routes>
            <Route path="dashboard/overview" element={<OverViewDash />} />
            <Route path="dashboard/bestseller" element={<BestSellers />} />
            <Route path="dashboard/KPIs" element={<KPIs />} />
            <Route path="dashboard/shipping" element={<Shipping />} />
            <Route path="dashboard/top-user" element={<TopUser />} />
            <Route path="dashboard" element={<Navigate to="overview" />} />{" "}
            <Route path="/" element={<Navigate to="/dashboard/overview" />} />{" "}
            {/* Mặc định overview */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
