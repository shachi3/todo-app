import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
 const [todos, setTodos] = useState([]);

 const fetchTodos = async () => {
  try {
   const res = await axios.get('http://localhost:5000/api/todos');
   setTodos(res.data);
  } catch (err) {
   console.error(err);
  }
 };

 useEffect(() => {
  fetchTodos();
 }, []);

 return (
  <div>
   <h3>Todo List</h3>
   {todos.map(todo => (
    <TodoItem key={todo._id} todo={todo} refreshTodos={fetchTodos} />
   ))}
  </div>
 );
};

export default TodoList;
