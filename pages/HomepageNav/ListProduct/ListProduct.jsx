// src/components/ProductView/ProductView.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { getAllProducts } from "../../Api/product"; // Import các hàm từ product.js
import CardProduct from "../ListProduct/CardProduct/CardProduct";
import "../ListProduct/styleListProducts.scss";

const ProductView = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts(); // Sử dụng hàm getAllProducts
        if (response.products && Array.isArray(response.products)) {
          // Kiểm tra mảng products
          setProducts(response.products); // Cập nhật danh sách sản phẩm
        } else {
          console.error("Dữ liệu trả về không đúng cấu trúc:", response);
        }
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h2 className="title pt-3 pb-0">DANH SÁCH SẢN PHẨM</h2>
      <div className="pt-3 pb-3">
        {loading ? (
          <div className="text-center">
            <Spinner color="primary" /> {/* Hiển thị loading spinner */}
          </div>
        ) : (
          <Row>
            {Array.isArray(products) && products.length > 0 ? ( // Kiểm tra nếu products là mảng và không rỗng
              products.map((product) => (
                <Col key={product._id} md={4} className="mb-4">
                  <CardProduct product={product} />{" "}
                  {/* Gửi product vào CardProduct */}
                </Col>
              ))
            ) : (
              <div className="text-center">Không có sản phẩm nào.</div>
            )}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default ProductView;
