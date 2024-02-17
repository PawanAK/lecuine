import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TodoCard({ title, body, id, delid }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary" onClick={() => onUpdate(todo)}>
          Update
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            delid(id);
          }}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
