import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">Todo App</h1>
      <TodoForm refreshTodos={() => { }} />
      <TodoList />
    </div>
  );
};

export default App;
