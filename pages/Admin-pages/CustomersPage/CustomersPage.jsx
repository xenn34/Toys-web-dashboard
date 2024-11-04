import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import SidebarAnimation from "../SidebarAnimation/SidebarAnimation";
import CustomerTable from "./CustomerTable";
import CustomersDetail from "../CustomersPage/CustomerDetail";
import "./CustomersPage.scss";
import AdminFooter from "../FooterAdmin/FooterAdmin";

const CustomersPage = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const customers = [
    { name: "John Doe", email: "johndoe@example.com", phone: "123-456-7890" },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
    },
    // ... thêm các khách hàng khác
  ];

  const handleCustomerSelect = (id) => {
    setSelectedCustomerId(id);
  };

  return (
    <Container>
      <Row>
        <Col xs="12" md="3">
          <SidebarAnimation />
        </Col>
        <Col xs="12" md="9">
          <h2 className="customer-list-title">Customer List</h2>
          <CustomerTable
            customers={customers}
            onCustomerSelect={handleCustomerSelect}
          />
          {selectedCustomerId !== null && (
            <CustomersDetail
              customer={customers[selectedCustomerId]}
              onClose={() => setSelectedCustomerId(null)}
            />
          )}
        </Col>
      </Row>
      <Row>
        <AdminFooter />
      </Row>
    </Container>
  );
};

export default CustomersPage;
