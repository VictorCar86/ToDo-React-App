import React from "react";
import { TodoTitle } from "../TodoTitle"
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoForm } from "../TodoForm";
import { TodoLoading } from "../TodoLoading";
import { TodoWithoutTodos } from "../TodoWithoutTodos";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal";

function AppUI(){
    const {
        error,
        loading,
        realTodos,
        checkTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoTitle />
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Desespérate, hubo un error :C</p>}
                {loading && <TodoLoading />}
                {(!loading && !realTodos.length) && <TodoWithoutTodos />}

                {realTodos.map(todo =>(<TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    checkTodo={() => checkTodo(todo.text)}
                    deleteTodo={() => deleteTodo(todo.text)}
                />))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };