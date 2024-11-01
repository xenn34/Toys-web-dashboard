import React from "react";
import { Table } from "reactstrap";
import "./CustomerTable.scss"; // Nhập file SCSS

const CustomerTable = ({ customers, onCustomerSelect }) => {
  return (
    <Table striped className="customer-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr
            key={index}
            onClick={() => onCustomerSelect(index)}
            className="customer-row"
          >
            <th scope="row">{index + 1}</th>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomerTable;
