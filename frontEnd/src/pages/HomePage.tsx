import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { listProducts } from "../actions/ProductActions";
import "../index.css";
import { Product } from "../components/Products";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.ProductList);
  const { products, error, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>Latest product</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <Row>
          {products.map((product: any) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
