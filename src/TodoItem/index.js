import { TodoIcons } from "../TodoIcons";
import "./TodoItem.css"

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span
                className={`TodoItem-check ${props.completed && 'TodoItem-check--completed'}`}
                onClick={props.checkTodo}
            ></span>
            <p className="TodoItem-text">{props.text}</p>
            <TodoIcons color="#d92d2d" onClick={props.deleteTodo}/>
        </li>
    );
}

export { TodoItem };