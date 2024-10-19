import { useState } from "react";

function AddTodo({updateTodos}){

    const [todoText , setTodoText] = useState('');
    return(
        <>
            <input 
            placeholder="Add your Next todo..."
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
            />
            <button onClick={() => {
                updateTodos(todoText)
                setTodoText('');
            }}>Post</button>
        </>
    );
}

export default AddTodo;