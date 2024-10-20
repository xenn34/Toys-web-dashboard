import React from "react";
import HeaderDash from "../../HeaderDash/HeaderDash";
import FooterDash from "../../FooterDash/FooterDash";

const OverViewDash = () => {
  return (
    <div style={{ padding: "2px" }}>
      <HeaderDash />
      <h1>Overview Dashboard</h1>
      <p>
        Đây là trang tổng quan của dashboard. Tại đây bạn có thể xem các thông
        tin quan trọng và phân tích dữ liệu.
      </p>
      <FooterDash />
    </div>
  );
};

export default OverViewDash;
