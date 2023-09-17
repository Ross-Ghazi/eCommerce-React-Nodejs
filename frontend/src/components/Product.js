import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

//  https://getbootstrap.com/docs/4.0/utilities/spacing/#notation
// https://react-bootstrap.netlify.app/components/cards/
// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_phrase_strong

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded ">
      <Link to={`/product/${product._id}`}>
        <Card.Img className="imageHeight" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title className="titleHeight" as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
