import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {text:'Cortar cebolla', completed: false},
//   {text:'Tormar el curso de intro a react', completed: true},
//   {text:'Llorar con la llorona', completed: true}
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;