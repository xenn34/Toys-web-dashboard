import { Col, Row, Container } from "reactstrap";
import AdminHeader from "../Admin-pages/HeaderAdmin/HeaderAdmin";
import AdminFooter from "../Admin-pages/FooterAdmin/FooterAdmin";
import { Routes, Route } from "react-router-dom";
import HomepageAdmin from "../Admin-pages/Homepage/HomepageAdmin";
import Dashboard from "../Dashboard/index";
import EmployeeTable from "../Admin-pages/EmployeesPage/Employees";
import CustomersPage from "../Admin-pages/CustomersPage/CustomersPage";
import ReportPage from "../Admin-pages/ReportPage/ReportPage";

function AdminLayout() {
  return (
    <Container fluid>
      <Row>
        <AdminHeader />
      </Row>
      <Row style={{ height: "calc(100vh - 120px)", overflowY: "auto" }}>
        <Routes>
          <Route path="/home" element={<HomepageAdmin />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeTable />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Routes>
      </Row>
      <Row>
        <AdminFooter />
      </Row>
    </Container>
  );
}

export default AdminLayout;
