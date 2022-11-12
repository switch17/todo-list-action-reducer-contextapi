import React, { useReducer } from "react";
import "./App.css"
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContext } from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []); // passing an array to hold all of that

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App With Context API</h1>
        <Todos/>
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
