import { Todo } from "./TodoContainer";
import "./TodoItem.css";


type TodoItemProps = {
    index: number;
    todo: Todo;
    handleDelete: (index: number) => void 
}

const TodoItem = (props: TodoItemProps) => {
const {todo, index, handleDelete} = props;

    return(
        <div className="todo-item">
            {todo.details}
                <button onClick={ () => handleDelete(index)}>Delete</button>
        </div>
    )
}

export default TodoItem;