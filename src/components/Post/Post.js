import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Post = ({ id, title, body }) => {
  return (
    <StyledCard border="secondary">
      <StyledLink to={`/post/${id}`}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </StyledLink>
    </StyledCard>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  .card-title {
    font-size: 1.7rem;
    font-weight: bold;
    color: black;
    margin: 0px 0px 20px;
  }

  .card-body {
    color: black;
    text-transform: capitalize;
  }
`;

const StyledCard = styled(Card)`
  margin: 20px auto;

  box-shadow: 8px 8px 24px -17px rgba(66, 68, 90, 1);

  :hover {
    box-shadow: 8px 8px 24px -1px rgba(66, 68, 90, 1);
    cursor: pointer;
  }
`;

export default Post;
