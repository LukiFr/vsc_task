import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Comment from "../Comment/Comment";

const PostView = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setComments(res.data))
      .catch((e) => new Error(e));

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((e) => new Error(e));
  }, []);

  return (
    <Container>
      <Post id={post.id} title={post.title} body={post.body} />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </Container>
  );
};

export default PostView;
