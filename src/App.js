import React from "react";
import "./styles.css";
import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoStore from "./Store";
import Header from "./Header";
// import TodoCounter from "./TodoCounter";

export default function App() {
  return (
    <div className="App">
      <Header store={TodoStore} />
      <Todo store={TodoStore} />
      <br />
      <TodoList store={TodoStore} />
    </div>
  );
}
