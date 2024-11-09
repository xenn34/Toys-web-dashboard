// Import các thư viện và component cần thiết từ React và Reactstrap
import React, { useState } from "react";
import {
  Table,
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import "../BestSellers/styleBestSellers.scss"; // Import file CSS tùy chỉnh
import img_lbx from "../../../img/lbx.jfif"; // Import hình ảnh mẫu

// Khởi tạo component TableBestSellers
const TableBestSellers = () => {
  // Dữ liệu mẫu chứa thông tin sản phẩm
  const initialData = [
    {
      id: 1,
      name: "Sản phẩm A",
      price: 2300000,
      sold: 50,
      revenue: 115000000,
      description: "Mô tả sản phẩm A",
      image: img_lbx,
    },
    {
      id: 2,
      name: "Sản phẩm B",
      price: 4200000,
      sold: 30,
      revenue: 126000000,
      description: "Mô tả sản phẩm B",
      image: img_lbx,
    },
    {
      id: 3,
      name: "Sản phẩm C",
      price: 1500000,
      sold: 40,
      revenue: 60000000,
      description: "Mô tả sản phẩm C",
      image: img_lbx,
    },
    {
      id: 4,
      name: "Sản phẩm D",
      price: 1200000,
      sold: 45,
      revenue: 54000000,
      description: "Mô tả sản phẩm D",
      image: img_lbx,
    },
    {
      id: 5,
      name: "Sản phẩm E",
      price: 1100000,
      sold: 48,
      revenue: 52800000,
      description: "Mô tả sản phẩm E",
      image: img_lbx,
    },
    {
      id: 6,
      name: "Sản phẩm F",
      price: 1300000,
      sold: 42,
      revenue: 54600000,
      description: "Mô tả sản phẩm F",
      image: img_lbx,
    },
    {
      id: 7,
      name: "Sản phẩm G",
      price: 1700000,
      sold: 35,
      revenue: 59500000,
      description: "Mô tả sản phẩm G",
      image: img_lbx,
    },
    {
      id: 8,
      name: "Sản phẩm H",
      price: 1400000,
      sold: 38,
      revenue: 53200000,
      description: "Mô tả sản phẩm H",
      image: img_lbx,
    },
    {
      id: 9,
      name: "Sản phẩm I",
      price: 1250000,
      sold: 43,
      revenue: 53750000,
      description: "Mô tả sản phẩm I",
      image: img_lbx,
    },
    {
      id: 10,
      name: "Sản phẩm J",
      price: 1600000,
      sold: 36,
      revenue: 57600000,
      description: "Mô tả sản phẩm J",
      image: img_lbx,
    },
  ];

  // Sử dụng state để lưu trữ dữ liệu sản phẩm đã được sắp xếp và sản phẩm được chọn
  const [sortedData, setSortedData] = useState(initialData);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  // Hàm format tiền theo đơn vị VNĐ
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // Hàm sắp xếp dữ liệu theo doanh thu giảm dần
  const sortByRevenue = () => {
    const sorted = [...sortedData].sort((a, b) => b.revenue - a.revenue);
    setSortedData(sorted);
  };

  // Hàm sắp xếp dữ liệu theo số lượng bán giảm dần
  const sortBySold = () => {
    const sorted = [...sortedData].sort((a, b) => b.sold - a.sold);
    setSortedData(sorted);
  };

  // Hàm xử lý sự kiện khi nhấn vào hàng của một sản phẩm
  const handleRowClick = (index) => {
    // Toggle chỉ số sản phẩm được chọn khi nhấn
    setSelectedProductIndex(selectedProductIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "2px" }}>
      <Container>
        <h1 className="title">TOP 10 SẢN PHẨM BÁN CHẠY NHẤT</h1>
        {/* Nhóm nút để sắp xếp theo doanh thu hoặc số lượng */}
        <div className="button-group pb-1">
          <Button color="primary" onClick={sortByRevenue}>
            DOANH THU
          </Button>
          <Button
            color="secondary"
            onClick={sortBySold}
            style={{ marginLeft: "10px" }}
          >
            SỐ LƯỢNG
          </Button>
        </div>
        {/* Bảng hiển thị danh sách sản phẩm */}
        <Table bordered hover responsive className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Giá bán</th>
              <th>Số lượng đã bán</th>
              <th>Doanh thu</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((product, index) => (
              <React.Fragment key={product.id}>
                {/* Hàng hiển thị thông tin tổng quan của sản phẩm */}
                <tr onClick={() => handleRowClick(index)}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{formatCurrency(product.price)}</td>
                  <td>{product.sold}</td>
                  <td>{formatCurrency(product.revenue)}</td>
                </tr>
                {/* Hiển thị chi tiết sản phẩm nếu sản phẩm được chọn */}
                {selectedProductIndex === index && (
                  <tr>
                    <td colSpan="5">
                      <Card className="mt-3">
                        <CardBody>
                          <Row>
                            <Col md="6" className="content-left">
                              <CardTitle tag="h5">{product.name}</CardTitle>
                              <CardText>{product.description}</CardText>
                              <CardText>
                                <strong>Giá bán:</strong>{" "}
                                {formatCurrency(product.price)}
                              </CardText>
                              <CardText>
                                <strong>Số lượng đã bán:</strong> {product.sold}
                              </CardText>
                              <CardText>
                                <strong>Doanh thu:</strong>{" "}
                                {formatCurrency(product.revenue)}
                              </CardText>
                            </Col>
                            <Col md="6" className="image-center">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="responsive-image"
                              />
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TableBestSellers;
