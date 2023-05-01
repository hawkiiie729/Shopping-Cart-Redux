import React, { useEffect, useState } from "react";
import TopNavbar from "../Components/Header/TopNavbar";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/Products/Card/ProductCard";
import { Container, Row ,Col} from "react-bootstrap";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    // console.log("res->",res);
    const jsonData = await res.json();
    // console.log("jsonData",jsonData);
    setData(jsonData);
  };
  return (
    <>
      <TopNavbar />
      <Container>
        <h4 className="mb-4">Showing Produdcts from</h4>
        <Row>
          {
            data.map((p) => {
              return (
                <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={p.id}>
                  <ProductCard product={p} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <div className="mb-5"></div>
      <Footer />
    </>
  );
};

export default Products;
