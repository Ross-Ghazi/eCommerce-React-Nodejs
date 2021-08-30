import React from "react";
import { Card, Button } from "react-bootstrap";

function Product({ product }) {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </a>

        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <div className="my-3">
              {product.rating} from {product.numReviews}
            </div>
          </Card.Text>
          <Card.Text as="h4">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
