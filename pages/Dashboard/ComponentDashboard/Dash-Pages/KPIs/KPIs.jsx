import React from "react";
import HeaderDash from "../../HeaderDash/HeaderDash";
import FooterDash from "../../FooterDash/FooterDash";
import { Col, Row } from "reactstrap";
import KPIProduct from "../KPIs/KPI-Products";
import TopBadEmployees from "../KPIs/KPI-Staffs";
import "../KPIs/styleKPI.scss";

const KPIs = () => {
  return (
    <div style={{ padding: "2px" }}>
      {/* <HeaderDash /> */}
      {/*KPIs tất cả sản phẩm */}
      <Row className="justify-content-center">
        <Col md="10">
          <h1 className="title text-center">KPI CÁC SẢN PHẨM CHIẾN LƯỢC</h1>
          <KPIProduct />
        </Col>
      </Row>
      {/*KPIs nhân viên */}
      <Row className="justify-content-center">
        <Col md="10">
          <h1 className="title text-center">TOP 5 NHÂN VIÊN KHÔNG ĐẠT KPI</h1>
          <TopBadEmployees />
        </Col>
      </Row>
      {/* <FooterDash /> */}
    </div>
  );
};

export default KPIs;
