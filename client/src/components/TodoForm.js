import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ refreshTodos }) => {
 const [title, setTitle] = useState('');
 const [startDate, setStartDate] = useState('');
 const [endDate, setEndDate] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   await axios.post('http://localhost:5000/api/todo', {
    title,
    startDate,
    endDate
   });
   setTitle('');
   setStartDate('');
   setEndDate('');
   refreshTodos();
  } catch (err) {
   console.error(err);
  }
 };

 return (
  <form onSubmit={handleSubmit}>
   <div className="form-group">
    <label>Title</label>
    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
   </div>
   <div className="form-group">
    <label>Start Date</label>
    <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
   </div>
   <div className="form-group">
    <label>End Date</label>
    <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
   </div>
   <button type="submit" className="btn btn-primary">Add Todo</button>
  </form>
 );
};

export default TodoForm;
