import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditMovieModal = ({ show, handleClose, movie, editMovie }) => {
  const [updatedMovie, setUpdatedMovie] = useState(movie);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie({ ...updatedMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editMovie(updatedMovie);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={updatedMovie.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditMovieModal;
