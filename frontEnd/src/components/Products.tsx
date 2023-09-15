import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { ProductType } from "../helper/types";
// import Rating from "./Rating";

interface ProductProps {
  product: ProductType;
}

export const Product: React.FC<ProductProps> = (props) => {
  const { product } = props;
  return (
    <Card className="my-3 p-3 rounded ">
      <Link to={`/product/${product._id}`}>
        <Card.Img className="imgeheight" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title className="titleheight" as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {/* <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            /> */}
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
