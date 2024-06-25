import React, { useState } from 'react';
import axios from 'axios';

const TodoItem = ({ todo, refreshTodos }) => {
 const [isEditing, setIsEditing] = useState(false);
 const [title, setTitle] = useState(todo.title);
 const [startDate, setStartDate] = useState(todo.startDate.split('T')[0]);
 const [endDate, setEndDate] = useState(todo.endDate.split('T')[0]);

 const handleUpdate = async () => {
  try {
   await axios.put(`http://localhost:5000/api/todo/${todo._id}`, {
    title,
    startDate,
    endDate
   });
   setIsEditing(false);
   refreshTodos();
  } catch (err) {
   console.error(err);
  }
 };

 return (
  <div className="todo-item">
   {isEditing ? (
    <div>
     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
     <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
     <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
     <button onClick={handleUpdate}>Update</button>
    </div>
   ) : (
    <div>
     <h4>{todo.title}</h4>
     <p>Start Date: {new Date(todo.startDate).toLocaleDateString()}</p>
     <p>End Date: {new Date(todo.endDate).toLocaleDateString()}</p>
     <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
   )}
  </div>
 );
};

export default TodoItem;
