import "./TodoList.css";

function TodoList(props){
    return(
        <section>
            <ul className="TodoList-container">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };