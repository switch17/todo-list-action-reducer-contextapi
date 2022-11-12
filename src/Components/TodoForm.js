import React, { useState, useContext } from "react";
import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";
import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");

  // creating dispatch
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault(); //stops the default submission
    if (todoString === "") {
      return alert("Task cannot be empty :(");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    // dispatching the todo so that it can be stored in the context
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };

  return (
    <Form >
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo"
            value={todoString}
            onChange={(event) => setTodoString(event.target.value)}
          />
          <Button color="warning"  onClick={handleSubmit}>Add</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
