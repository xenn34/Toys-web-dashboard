import React from "react";
import { Col, Row, Table } from "reactstrap";
import "./TopStaff.scss";

// Dữ liệu giả lập
const employees = [
  { id: 1, name: "Nguyễn Văn A", sales: 5000000 },
  { id: 2, name: "Trần Thị B", sales: 3000000 },
  { id: 3, name: "Lê Văn C", sales: 7000000 },
  { id: 4, name: "Phạm Thị D", sales: 6000000 },
  { id: 5, name: "Nguyễn Văn E", sales: 8000000 },
  { id: 6, name: "Trần Văn F", sales: 4500000 },
];

// Hàm định dạng số tiền
const formatCurrency = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VNĐ";
};

const TopStaffTable = () => {
  // Sắp xếp theo doanh số và lấy 5 nhân viên đầu tiên
  const topEmployees = employees.sort((a, b) => b.sales - a.sales).slice(0, 5);

  return (
    <div className="table-container">
      <Row>
        <Col>
          <Table striped>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Tên Nhân Viên</th>
                <th style={{ textAlign: "left" }}>Doanh Số</th>
              </tr>
            </thead>
            <tbody>
              {topEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td style={{ textAlign: "left" }}>{employee.name}</td>
                  <td style={{ textAlign: "left" }}>
                    {formatCurrency(employee.sales)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default TopStaffTable;
