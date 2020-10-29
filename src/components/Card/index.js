import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background-color: #fff;
  color: #363852;
  //box-shadow: 5px 5px 40px rgba(255, 150, 180, 0.4);
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.4);
  text-align: center;
  margin: auto;
  color: white;
  width: 50%;
  height: min-content;
  padding: 5rem;
  border-radius: 10px;
`;

const Card = (children) => {
  return <CardDiv>{children}</CardDiv>;
};

export default Card;
