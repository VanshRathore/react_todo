import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';


function App() {

  const [todos, setTodos] = useState([
    {id:1, text: 'todo1', isFinished: true},
    {id:1, text: 'todo1', isFinished: true},
  ]);

  function updateTodos(todoText){
    let nextid = todos.length+1;
    setTodos([...todos, {id: nextid, isFinished:false, text: todoText}]);
  } 

  return (
    <>
      <AddTodo updateTodos = {updateTodos}/>
      <TodoList todos = {todos}/>
    </>
  )
}

export default App;
