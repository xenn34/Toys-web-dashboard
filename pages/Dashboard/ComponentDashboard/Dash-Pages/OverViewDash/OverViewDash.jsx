import React from "react";
import HeaderDash from "../../HeaderDash/HeaderDash";
import FooterDash from "../../FooterDash/FooterDash";
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap"; // Thêm các component cần thiết
import { Routes, Route } from "react-router-dom";
import RevenueBarChart from "../../ChartJS/Overview/Revenue";
import Users from "../../ChartJS/Overview/Users";
import Goods from "../../ChartJS/Overview/Goods";
import DetailOfQuantity from "../../ChartJS/Overview/Piechart-Detail";

const OverViewDash = () => {
  return (
    <div style={{ padding: "20px" }}>
      {" "}
      {/* Thêm padding để tạo không gian cho header */}
      <HeaderDash />
      <hr className="my-3 text-danger" />
      <Container>
        {/* Nội dung Dashboard */}
        {/* Doanh thu */}
        <Row>
          <Col xs="12" md="4">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      <i className="fas fa-dollar-sign mr-2" />
                      <span> DOANH THU</span>
                    </CardTitle>
                    <span className="h6 font-weight-bold mb-0">
                      200,000,000 VNĐ
                    </span>
                  </div>
                </Row>
                <p className="mt-2 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" /> 8%
                  </span>
                  <br />
                  <span className="text-nowrap">So với tháng trước</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8">
            <Container
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <RevenueBarChart />
            </Container>
          </Col>
        </Row>
        <hr className="my-3 text-danger" />
        {/* Người dùng */}
        <Row>
          <Col xs="12" md="4">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      <i className="fas fa-user mr-2" />
                      <span> LƯỢNG NGƯỜI DÙNG</span>
                    </CardTitle>
                    <span className="h6 font-weight-bold mb-0">2000 NGƯỜI</span>
                  </div>
                </Row>
                <p className="mt-2 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" /> 8%
                  </span>
                  <br />
                  <span className="text-nowrap">So với tháng trước</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8">
            <Container
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Users />
            </Container>
          </Col>
        </Row>
        <hr className="my-3 text-danger" />
        {/* Hàng hóa */}
        <Row>
          <Col xs="12" md="4">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      <i className="fas fa-box mr-2" />
                      <span> HÀNG HÓA BÁN ĐƯỢC</span>
                    </CardTitle>
                    <span className="h6 font-weight-bold mb-0">
                      2233 ĐƠN VỊ
                    </span>
                  </div>
                </Row>
                <p className="mt-2 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" /> 10%
                  </span>
                  <br />
                  <span className="text-nowrap">So với tháng trước</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8">
            <Container
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Goods />
            </Container>
            <hr className="my-3 text-danger" />
            <Row>
              <h1>CHI TIẾT:</h1>
              <Container>
                <DetailOfQuantity />
              </Container>
            </Row>
          </Col>
        </Row>
        <hr className="my-3 text-danger" />
      </Container>
      <FooterDash />
    </div>
  );
};

export default OverViewDash;
