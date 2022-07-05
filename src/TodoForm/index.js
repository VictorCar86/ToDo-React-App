import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("")

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setNewTodoValue("")
    }

    return (
        <form className="TodoForm__form">
            <label className="TodoForm__label">Escribe el To Do que desees guardar</label>
            <textarea
                className="TodoForm__textarea"
                placeholder="Cortar cebollar para el almuerzo..."
                value={newTodoValue}
                onChange={onChange}
            />
            <button className="TodoForm__cancelBtn buttonTodo" type="button" onClick={onCancel}>Cancelar</button>
            <button className="TodoForm__addBtn buttonTodo" type="submit" onClick={onSubmit}>Añadir</button>
        </form>
    );
}

export { TodoForm };