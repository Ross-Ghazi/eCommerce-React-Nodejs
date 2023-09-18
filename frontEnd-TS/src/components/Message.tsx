import React from "react";
import { Alert } from "react-bootstrap";

export const Message: React.FC<any> = (props) => {
  const { variant, children } = props;
  return <Alert variant={variant}>{children}</Alert>;
};
