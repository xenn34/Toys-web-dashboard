import React from "react";
import "./Payment.scss";

const Payment = () => {
  return (
    <div className="container-payment">
      {/* Thông tin khách hàng */}
      <div className="info-main-payment">
        <aside className="img-info-payment">
          <img src="image/Avatar.jpg" alt="Profile" />
        </aside>
        <main className="main-info-payment">
          <h2>MAI XUÂN NHÂN</h2>
          <p>0868487465</p>
        </main>
      </div>

      {/* Thông tin mã giảm giá */}
      <div className="info-payment">
        <label htmlFor="coupon">Mã giảm giá:</label>
        <input type="text" id="coupon" />
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-list-payment">
        <div className="product-item-payment">
          <img src="mouse.png" alt="Chuột Gaming" />
          <div className="product-info-payment">
            <h3>Chuột Gaming có dây Havit M79 RGB</h3>
            <span className="status delivered">Đã giao</span>
            <p className="price">180.000đ</p>
          </div>
        </div>
        {/* Thêm các sản phẩm khác ở đây */}
      </div>

      {/* Thanh toán và Tổng cộng */}
      <div className="payment-total">
        <div className="temporary">Tạm tính</div>
        <div className="totalprice">500.000 đ</div>
      </div>
      <div className="order-payment">Xác nhận đặt hàng</div>
    </div>
  );
};

export default Payment;
