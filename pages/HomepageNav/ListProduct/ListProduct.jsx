import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { getAllProducts } from "../../Api/product";
import CardProduct from "../ListProduct/CardProduct/CardProduct";
import "../ListProduct/styleListProducts.scss";

const ProductView = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        if (response.products && Array.isArray(response.products)) {
          setProducts(response.products);
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

  const handleDeleteSuccess = (deletedProductId) => {
    setProducts(products.filter((product) => product._id !== deletedProductId));
  };

  const handleUpdateSuccess = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  return (
    <Container>
      <h2 className="title pt-3 pb-0">DANH SÁCH SẢN PHẨM</h2>
      <div className="pt-3 pb-3">
        {loading ? (
          <div className="text-center">
            <Spinner color="primary" />
          </div>
        ) : (
          <Row>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <Col key={product._id} md={4} className="mb-4">
                  <CardProduct
                    product={product}
                    onDeleteSuccess={handleDeleteSuccess}
                    onUpdateSuccess={handleUpdateSuccess}
                  />
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
