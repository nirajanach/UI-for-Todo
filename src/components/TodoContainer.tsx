import {  useState } from "react";
import TodoItem from "./TodoItem";
import useGetRequest from "../hooks/useGetRequest";
import { GET_TODO_URL } from "../constants/LocalStorageKeys";



export type Todo = {
    id: number,
    details: string,
    completed: boolean,
    createdAt: Date,
    userId: number
}



function TodoContainer() {
  const [text, setText] = useState("");
  const [hasError, setHasError] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

//   const [data, loading] = useGetRequest(BASE_URL);

  const onAddTodo = (todo: string) => {
    if (todo === "") {
      setHasError(true);
      return;
    }
    setHasError(false);
    setTodos((currentTodos) => [...currentTodos, {id: 0, details: todo, createdAt: new Date(), completed: false, userId: 0}]);
    setText("");

    //Posting to the API
  };

  const onDeleteTodo = (index: number) => {
    setTodos(todos.filter((todo, idx) => index !== idx));
  };

  return (
    <>
      <div className="card">       
        <p> Add in a todo and click enter</p>
        <div>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button onClick={() => onAddTodo(text)}>Add</button>
        </div>
        {hasError && <div style={{ color: "red" }}>Cannot add empty todo </div>}
      </div>
      <div className="todo-item-container">
        {todos.map((todo, index) => (
          <TodoItem
            key={`todo-key-${index}`}
            todo={todo}
            index={index}
            handleDelete={onDeleteTodo}
          />
        ))}
      </div>   
      
    </>
  );
}

export default TodoContainer;