import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import axios from "axios";

const NewPostAndCommentModal = ({ modalOpen, setModalOpen }) => {
  const location = useLocation();

  const handleSubmit = (e) => {
    const body =
      location.pathname === "/"
        ? JSON.stringify({
            title: e.target[0].value,
            body: e.target[1].value,
            userId: 1,
          })
        : JSON.stringify({
            body: e.target[0].value,
            userId: 1,
          });

    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

    location.pathname === "/"
      ? axios
          .post("https://jsonplaceholder.typicode.com/posts", body, headers)
          .then((res) => console.log(res))
      : axios
          .put(`https://jsonplaceholder.typicode.com/posts/1`, body, headers)
          .then((res) => console.log(res));

    setModalOpen(false);
    e.preventDefault();
  };

  return (
    <Modal
      show={modalOpen}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          {location.pathname === "/" ? "Add New Post" : "Add New Comment"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          {location.pathname === "/" ? (
            <>
              {" "}
              <Form.Control type="text" placeholder="Title" />
              <Form.Control
                className={"mt-3"}
                as="textarea"
                rows={5}
                placeholder="Text"
              />
            </>
          ) : (
            <>
              {" "}
              <Form.Control
                className={"mt-3"}
                as="textarea"
                rows={5}
                placeholder="Text"
              />
            </>
          )}

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewPostAndCommentModal;
