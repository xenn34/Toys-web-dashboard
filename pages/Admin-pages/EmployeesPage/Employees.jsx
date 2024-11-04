import React from "react";
import { Col, Row, Container, Table } from "reactstrap";
import SidebarAnimation from "../SidebarAnimation/SidebarAnimation";

import AdminFooter from "../FooterAdmin/FooterAdmin";

const employees = [
  { id: 1, name: "Nguyễn Văn A", position: "Quản lý", email: "a@example.com" },
  { id: 2, name: "Trần Thị B", position: "Nhân viên", email: "b@example.com" },
  {
    id: 3,
    name: "Lê Văn C",
    position: "Kỹ thuật viên",
    email: "c@example.com",
  },
  { id: 4, name: "Phạm Thị D", position: "Nhân viên", email: "d@example.com" },
  { id: 5, name: "Hoàng Văn E", position: "Quản lý", email: "e@example.com" },
  {
    id: 6,
    name: "Nguyễn Thị F",
    position: "Nhân viên",
    email: "f@example.com",
  },
  { id: 7, name: "Trần Văn G", position: "Nhân viên", email: "g@example.com" },
  {
    id: 8,
    name: "Lê Thị H",
    position: "Kỹ thuật viên",
    email: "h@example.com",
  },
  { id: 9, name: "Phạm Văn I", position: "Quản lý", email: "i@example.com" },
  {
    id: 10,
    name: "Hoàng Thị J",
    position: "Nhân viên",
    email: "j@example.com",
  },
];

const EmployeeTable = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" md="3">
          <SidebarAnimation />
        </Col>
        <Col xs="12" md="9">
          <Row className="mb-1 mt-3">
            <h1 className="title">Danh sách Nhân Viên</h1>
          </Row>
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Chức Vụ</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td>{employee.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
      <Row>
        <AdminFooter />
      </Row>
    </Container>
  );
};

export default EmployeeTable;
