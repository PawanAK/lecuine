import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TodoCard({ id, title, body, delid, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ title: title, body: body });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({ ...updatedTodo, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(updatedTodo);
  };

  return (
    <Card>
      <Card.Body>
        {isEditing ? (
          <>
            <Form.Group controlId="editTitle">
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={updatedTodo.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="editBody">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter body"
                name="body"
                value={updatedTodo.body}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
            <Button variant="info" onClick={handleEdit}>
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                delid(id);
              }}>
              Delete
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
