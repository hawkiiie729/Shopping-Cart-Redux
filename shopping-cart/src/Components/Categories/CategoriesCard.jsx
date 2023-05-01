import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Categories/CategoriesCard.css"

const CategoriesCard = ({ category }) => {
  return (
    <Link
      to={`category/${category}`}
      className="text-decoration-none text-dark"
    >
      <Card className="custom-card">
        <Card.Body>
          <Card.Text className="text-capitalize">{category}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CategoriesCard;
