import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter(){
    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return(
        <div className="TodoCounter">
            <h2> Has complentado {completedTodos} de {totalTodos} ToDos</h2>
        </div>
    )
}

export {TodoCounter};