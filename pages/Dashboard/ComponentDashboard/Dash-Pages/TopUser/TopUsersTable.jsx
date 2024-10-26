// TopUsersTable.js
import React, { useState } from "react";
import { Table, Card, CardBody, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TopUsersTable = () => {
  const [expandedUser, setExpandedUser] = useState(null); // Chỉ giữ thông tin của người dùng đã chọn
  const users = [
    {
      id: 1,
      fullName: "Nguyễn Văn Anh",
      totalPurchases: 150,
      revenue: 3000000,
      products: [
        { name: "Xe điều khiển", quantity: 1 }, // Fake quantity
        { name: "Robot đồ chơi", quantity: 3 }, // Fake quantity
        { name: "Lego", quantity: 2 }, // Fake quantity
      ],
    },
    {
      id: 2,
      fullName: "Trần Thị Bình",
      totalPurchases: 120,
      revenue: 2500000,
      products: [
        { name: "Đồ chơi xếp hình", quantity: 5 }, // Fake quantity
        { name: "Máy bay điều khiển từ xa", quantity: 1 }, // Fake quantity
      ],
    },
    {
      id: 3,
      fullName: "Lê Văn Châu",
      totalPurchases: 100,
      revenue: 2000000,
      products: [
        { name: "Búp bê", quantity: 2 }, // Fake quantity
        { name: "Gấu bông", quantity: 1 }, // Fake quantity
        { name: "Lego", quantity: 4 }, // Fake quantity
      ],
    },
    {
      id: 4,
      fullName: "Phạm Văn Dũng",
      totalPurchases: 90,
      revenue: 1800000,
      products: [
        { name: "Xe tải đồ chơi", quantity: 3 }, // Fake quantity
        { name: "Siêu nhân", quantity: 2 }, // Fake quantity
      ],
    },
    {
      id: 5,
      fullName: "Trần Thị Em",
      totalPurchases: 85,
      revenue: 1700000,
      products: [
        { name: "Đồ chơi nhà bếp", quantity: 1 }, // Fake quantity
        { name: "Thú bông", quantity: 4 }, // Fake quantity
      ],
    },
    {
      id: 6,
      fullName: "Nguyễn Văn Phong",
      totalPurchases: 80,
      revenue: 1600000,
      products: [
        { name: "Lego", quantity: 5 }, // Fake quantity
        { name: "Đồ chơi xếp hình", quantity: 3 }, // Fake quantity
      ],
    },
    {
      id: 7,
      fullName: "Đinh Văn Giang",
      totalPurchases: 75,
      revenue: 1500000,
      products: [
        { name: "Đường đua xe đồ chơi", quantity: 1 }, // Fake quantity
        { name: "Lính đồ chơi", quantity: 3 }, // Fake quantity
      ],
    },
    {
      id: 8,
      fullName: "Bùi Văn Hùng",
      totalPurchases: 70,
      revenue: 1400000,
      products: [
        { name: "Máy bay đồ chơi", quantity: 2 }, // Fake quantity
      ],
    },
    {
      id: 9,
      fullName: "Vũ Văn Huy",
      totalPurchases: 65,
      revenue: 1300000,
      products: [
        { name: "Siêu nhân", quantity: 2 }, // Fake quantity
        { name: "Đồ chơi nấu ăn", quantity: 1 }, // Fake quantity
      ],
    },
    {
      id: 10,
      fullName: "Nguyễn Văn Khánh",
      totalPurchases: 60,
      revenue: 1200000,
      products: [
        { name: "Đồ chơi phát sáng", quantity: 1 }, // Fake quantity
        { name: "Đồ chơi giáo dục", quantity: 3 }, // Fake quantity
      ],
    },
  ];

  const handleUserClick = (user) => {
    setExpandedUser((prevUser) => (prevUser === user ? null : user)); // Chỉ hiển thị sản phẩm của người dùng đã chọn
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Tên</th>
            <th>Doanh Số Mang Lại</th>
            <th className="d-none d-md-table-cell">ID</th>
            <th className="d-none d-md-table-cell">Tổng Số Lần Mua</th>
            <th className="d-none d-md-table-cell">Sản Phẩm Đã Mua</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <tr
                onClick={() => handleUserClick(user)}
                style={{ cursor: "pointer" }}
              >
                <td>{user.fullName}</td>
                <td>
                  {user.revenue.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td className="d-none d-md-table-cell">{user.id}</td>
                <td className="d-none d-md-table-cell">
                  {user.totalPurchases}
                </td>
                <td className="d-none d-md-table-cell">
                  {user.products.map((product) => (
                    <span key={product.name} style={{ marginRight: "5px" }}>
                      {product.name}
                    </span>
                  ))}
                </td>
              </tr>
              {expandedUser &&
                expandedUser.id === user.id && ( // Chỉ hiển thị thông tin của người dùng đã chọn
                  <tr>
                    <td colSpan={5}>
                      <Card className="mt-2">
                        <CardBody>
                          <CardTitle tag="h5">
                            Thông tin sản phẩm đã mua của {user.fullName}
                          </CardTitle>
                          {expandedUser.products.map((product) => (
                            <CardText key={product.name}>
                              <strong>Tên sản phẩm:</strong> {product.name}{" "}
                              <br />
                              <strong>Số lượng:</strong> {product.quantity}
                            </CardText>
                          ))}
                        </CardBody>
                      </Card>
                    </td>
                  </tr>
                )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TopUsersTable;
