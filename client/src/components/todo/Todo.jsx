import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoCard from "./TodoCards";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Todo() {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [Arrays, setArrays] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArrays([...Arrays, inputs]);
    setInputs({ title: "", body: "" }); // Reset inputs after submission
    toast.success("Todo added successfully");
  };

  const handleUpdate = (id, updatedTodo) => {
    const updatedTodos = Arrays.map((todo, index) =>
      index === id ? updatedTodo : todo
    );
    setArrays(updatedTodos);
    toast.success("Todo updated successfully");
  };

  const del = (id) => {
    Arrays.splice(id, 1);
    setArrays([...Arrays]);
    toast.error("Todo deleted successfully");
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={inputs.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter body"
            name="body"
            value={inputs.body}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Todo
        </Button>
      </Form>

      <div>
        {Arrays.map((item, index) => (
          <TodoCard
            key={index}
            id={index}
            title={item.title}
            body={item.body}
            delid={del}
            onUpdate={(updatedTodo) => handleUpdate(index, updatedTodo)}
          />
        ))}
      </div>
    </>
  );
}

export default Todo;
