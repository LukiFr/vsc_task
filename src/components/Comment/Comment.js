import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const Comment = ({ name, email, body }) => {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Text>{body}</Card.Text>
        <footer className="blockquote-footer">{name}</footer>
        <footer className="blockquote-footer">{email}</footer>
      </Card.Body>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin: 10px auto;
  width: 90%;

  footer {
    margin: 0;
  }

  box-shadow: 8px 8px 24px -17px rgba(66, 68, 90, 1);
`;

export default Comment;
