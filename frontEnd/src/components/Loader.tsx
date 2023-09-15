import React from "react";
import { Spinner } from "react-bootstrap";
// import { Spinner } from "react-bootstrap";

export const Loader: React.FC = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
