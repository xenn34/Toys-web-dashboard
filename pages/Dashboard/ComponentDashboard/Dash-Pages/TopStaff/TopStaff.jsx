import React from "react";
import HeaderDash from "../../HeaderDash/HeaderDash";
import FooterDash from "../../FooterDash/FooterDash";
import { Col, Row } from "reactstrap";
import TopStaffTable from "../TopStaff/TopStaffTable.jsx";

const TopStaff = () => {
  return (
    <div style={{ padding: "2px" }}>
      {/* <HeaderDash /> */}
      <Row>
        {" "}
        <h1 className="title">TOP 5 NHÂN VIÊN CÓ DOANH SỐ CAO NHẤT</h1>
        <TopStaffTable />
      </Row>
      <Row></Row>
      {/* <FooterDash /> */}
    </div>
  );
};

export default TopStaff;
