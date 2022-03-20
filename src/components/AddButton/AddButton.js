import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const AddButton = ({ onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      className="btn btn-primary rounded-circle btn-lg"
    >
      +
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  font-size: 40px;
  padding: 0px 0px 10px;

  :focus {
    outline: none;
    box-shadow: none;
  }
`;

export default AddButton;
