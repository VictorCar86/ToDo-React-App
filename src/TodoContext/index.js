import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error
    } = useLocalStorage("TODOS_V1", []);

    const checkTodo = thisText => {
        const todoIndex = todos.findIndex(todo => todo.text == thisText);
        let thisTodos = [...todos];
        thisTodos[todoIndex].completed = !thisTodos[todoIndex].completed;
        setTodos(thisTodos);
    }

    const addTodo = text => {
        let newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        })
        setTodos(newTodos);
    }

    const deleteTodo = thisTodo => {
        const todoIndex = todos.findIndex(todo => todo.text == thisTodo);
        let thisTodos = [...todos];
        thisTodos.splice(todoIndex, 1)
        setTodos(thisTodos);
    }

    const [openModal, setOpenModal] = React.useState(false)

    // ToDos search
    const [searchValue, setSearchValue] = React.useState("");

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let realTodos;
    if (!searchValue.length >= 1){
        realTodos = todos
    } else {
        realTodos = todos.filter(todo => {
        const textSearch = searchValue.toLowerCase();
        const todosFiltered = todo.text.toLowerCase();
        return todosFiltered.includes(textSearch)
        })
    }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            realTodos,
            addTodo,
            checkTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            loading,
            error,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext };