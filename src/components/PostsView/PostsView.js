import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import Container from "react-bootstrap/Container";
import axios from "axios";

const PostsView = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((e) => new Error(e));
  }, []);

  return (
    <Container>
      <>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </>
    </Container>
  );
};

export default PostsView;
