import React, { useEffect, useState } from "react";
import TopNavbar from "../../../Components/Header/TopNavbar";
import { Col, Container, Row ,Image, Button} from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import "./ProductDetails.css";

const SingleProductDetail = () => {
    let { productId } = useParams();
    let [products,setProducts]=useState([])
  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fakeStore();
  }, []);

  //allproducts
  const fakeStore = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    // console.log("res->",res);
    const jsonData = await res.json();
    // console.log("jsonData",jsonData);
    setProducts(jsonData);
  };

  //increase item quantity
  const increaseQuantity = (e) => {
    e.preventDefault();
    quantity += 1;
    setQuantity(quantity);
  };
  //decrease item quantity
  const descreaseQuantity = (e) => {
    e.preventDefault();
    quantity -= 1;
    setQuantity(quantity);
  };

  useEffect(() => {
    let result = products.find((p) => p.id === parseInt(productId));
    setProduct(result);
  }, [productId, products]);

  return <>
  <TopNavbar />
      <Container>
        {product && (
          <Row className="my-5">
            <Col md={6} sm={12}>
              <div className="img-container p-3">
                <Image className="single-img" src={product.image} />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="px-4">
                <h2>{product.title}</h2>
                <h4 className="py-2 fs-5">
                  Category:{" "}
                  <Link
                    to={`/category/${product.category}`}
                    className="text-capitalize text-decoration-none"
                  >
                    {product.category}
                  </Link>
                </h4>
                <h4 className="py-2">Price: ${product.price}</h4>
                <p>{product.description}</p>
                <div className="d-flex mb-3">
                  <button
                    className="btn btn-sm btn-dark fs-6 me-3 text-center"
                    onClick={descreaseQuantity}
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    className="form-control text-center w-auto p-0 m-0"
                    value={quantity}
                    readOnly={true}
                    required={true}
                  />
                  <button
                    className="btn btn-sm btn-dark fs-6 ms-3 text-center"
                    onClick={increaseQuantity}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="">
                  <Button variant="dark" className="me-2">
                    Buy Now
                  </Button>
                  <Button
                    variant="secondary"
                    className="ms-2"
                   
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
  </>;
};

export default SingleProductDetail;
