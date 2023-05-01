import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product.id}`} className="text-dark text-decoration-none">
        <Card className="custom-card">
          <Card.Img variant="top" className="py-3 card-img" src={product.image}/>
            <Card.Body className="text-center">
                <Card.Title className="fs-6">
                    {product.title.slice(0,30)}
                </Card.Title>
                <Card.Text className="text-capotalize text-decoratiom-none fs-6">
                    {product.category}
                </Card.Text>
                <h5>${product.price}</h5>
            </Card.Body>
          
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
